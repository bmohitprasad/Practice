from django import forms

from app1.models import Employee

class employee_form(forms.ModelForm):
    class Meta:
        model = Employee
        fields = "__all__"