import MySQLdb

con = "CREATE DATABASE pdbc_84"

sql = MySQLdb.connect(user = 'root', host = '127.0.0.1', password = '738107')

cursor = sql.cursor()

cursor.execute(con)

sql.close()