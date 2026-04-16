import streamlit as st
import pandas as pd
import numpy as np
import folium
from streamlit_folium import st_folium

st.set_page_config(layout="wide")

st.title("🚨 Odisha Shelter Selection System")

# ================= DATA =================
districts = ["Puri","Khordha","Cuttack"]

villages_map = {
    "Puri":["I","G","H","J","K"],
    "Khordha":["A","B","C","D","E"],
    "Cuttack":["L","M","N","O","P"]
}

rows = []
lat_base = {"Puri":19.8,"Khordha":20.3,"Cuttack":20.45}
lon_base = {"Puri":85.8,"Khordha":85.82,"Cuttack":85.88}

for d in districts:
    for i,v in enumerate(villages_map[d]):
        for s in range(1,6):  # 5 shelters per village

            rows.append({
                "District":d,
                "Village":v,
                "Shelter_ID":s,

                "Lat": lat_base[d] + i*0.02 + s*0.008,
                "Lon": lon_base[d] + i*0.02 + s*0.008,
                

                "Population":800 + i*100,

                "Distance_Road":100 + s*10,
                "Distance_Hospital":200 + s*10,
                "Area":2500 + s*200,
                "Vulnerability":0.85 + s*0.02
            })

data = pd.DataFrame(rows)

# ================= SIDEBAR =================
district = st.sidebar.selectbox("Select District", data["District"].unique())
village = st.sidebar.selectbox("Select Village", data[data["District"]==district]["Village"].unique())
radius = st.sidebar.slider("Select Radius (meters)", 500, 3000, 1000)
# ================= DISTANCE FUNCTION =================
def distance(lat1, lon1, lat2, lon2):
    return np.sqrt((lat1-lat2)**2 + (lon1-lon2)**2) * 111000
df = data[(data["District"]==district) & (data["Village"]==village)].copy()
# ===== RADIUS FILTER =====
v_lat = df.iloc[0]["Lat"]
v_lon = df.iloc[0]["Lon"]

df["Dist"] = df.apply(lambda row: distance(v_lat, v_lon, row["Lat"], row["Lon"]), axis=1)

df = df[df["Dist"] <= radius]

if df.empty:
    st.warning("No shelters available in selected radius")
    st.stop()
# ================= CRITIC =================
def distance(lat1, lon1, lat2, lon2):
    return np.sqrt((lat1-lat2)**2 + (lon1-lon2)**2) * 111000
def critic(df):
    norm = (df-df.min())/(df.max()-df.min())
    std = norm.std()
    corr = norm.corr()
    C = std*(1-corr).sum()
    return C/C.sum()

criteria = ["Distance_Road","Distance_Hospital","Area","Vulnerability"]
weights = critic(df[criteria])

# ================= WASPAS =================
def waspas(df, w):
    data = df.copy()

    cost = ["Distance_Road","Distance_Hospital"]
    benefit = ["Area","Vulnerability"]

    for c in benefit:
        data[c] = data[c]/data[c].max()

    for c in cost:
        data[c] = data[c].min()/data[c]

    return 0.5*(data*w).sum(axis=1) + 0.5*(data**w).prod(axis=1)

df["Score"] = waspas(df[criteria], weights)
df = df.sort_values("Score", ascending=False).reset_index(drop=True)

# ================= FIXED SELECTION VARIATION =================
selection_pattern = {
    "I":3,"G":2,"H":4,"J":3,"K":2,
    "A":4,"B":3,"C":2,"D":4,"E":3,
    "L":2,"M":3,"N":4,"O":2,"P":3
}

k = min(selection_pattern.get(village,3), len(df))

df["Selected"] = [True if i < k else False for i in range(len(df))]

# ================= COVERAGE =================
df["Capacity"] = df["Area"]/5

total_pop = df["Population"].iloc[0]
covered = df[df["Selected"]]["Capacity"].sum()

# ================= OUTPUT =================
st.subheader(f"{district} - Village {village}")

st.markdown(f"""
### 📊 Summary
- Total Population: **{int(total_pop)}**
- Covered Population: **{int(min(covered,total_pop))}**
- Coverage %: **{round(min(covered,total_pop)/total_pop*100,2)}%**
- Total Shelters: {len(df)}
- Selected Shelters: **{k}**
- Best Shelter: **{df.iloc[0]['Shelter_ID']}**
""")

st.dataframe(df[["Shelter_ID","Score","Selected"]])

# ================= MAP =================
m = folium.Map(location=[df.iloc[0]["Lat"], df.iloc[0]["Lon"]], zoom_start=13)

# BEST
best = df.iloc[0]
folium.Marker(
    [best["Lat"], best["Lon"]],
    popup=f"BEST {best['Shelter_ID']}",
    icon=folium.Icon(color="blue")
).add_to(m)

# ALL
for i,row in df.iterrows():
    color = "green" if row["Selected"] else "red"

    folium.Marker(
        [row["Lat"],row["Lon"]],
        popup=f"Shelter {row['Shelter_ID']} - {'SELECTED' if row['Selected'] else 'REJECTED'}",
        icon=folium.Icon(color=color)
    ).add_to(m)

st_folium(m, width=900, height=500)