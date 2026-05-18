from django.contrib import admin

# Register your models here.
from app1.models import Employee

class employee_admin(admin.ModelAdmin):
    list_display = ['emp_id', 'emp_name', 'emp_email']
    ordering = ['emp_id']

admin.site.register(Employee, employee_admin)