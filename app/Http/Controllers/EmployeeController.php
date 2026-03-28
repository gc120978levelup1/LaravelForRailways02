<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;

class EmployeeController extends Controller
{
    public function create_scan_license()
    {
        return Inertia::render('viewjs/employee/create_scan_license');
    }

    public function store(StoreEmployeeRequest $request)
    {
        if ($request->hasFile('image_id_file1')) {
            $request->merge([
                'image_id_link1' => config('alphaenvironment.LOCAL_URL') . $request->file('image_id_file1')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        ;
        $employee = Employee::create($request->all());
        return redirect()->route('employee.create_upload_2ids', [
            'employee' => $employee
        ]);
    }
    public function create_upload_2ids(Employee $employee)
    {
        return Inertia::render('viewjs/employee/create_upload_2ids', [
            'employee' => $employee
        ]);
    }

    public function update_create_upload_2ids(StoreEmployeeRequest $request, Employee $employee)
    {
        if ($request->hasFile('image_id_file2')) {
            $request->merge([
                'image_id_link2' => config('alphaenvironment.LOCAL_URL') . $request->file('image_id_file2')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        ;
        if ($request->hasFile('image_id_file3')) {
            $request->merge([
                'image_id_link3' => config('alphaenvironment.LOCAL_URL') . $request->file('image_id_file3')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        ;
        $employee->update($request->all());
        return redirect()->route('employee.create_upload_4pics', [
            'employee' => $employee
        ]);
    }
    public function create_upload_4pics(Employee $employee)
    {
        return Inertia::render('viewjs/employee/create_upload_4pics', [
            'employee' => $employee
        ]);
    }

    public function update_create_upload_4pics(StoreEmployeeRequest $request, Employee $employee)
    {
        if ($request->hasFile('image_emp_file1')) {
            $request->merge([
                // local file upload, VPS
                'image_emp_link1' => config('alphaenvironment.LOCAL_URL') . $request->file('image_emp_file1')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }

        if ($request->hasFile('image_emp_file2')) {
            $request->merge([
                // local file upload, VPS
                'image_emp_link2' => config('alphaenvironment.LOCAL_URL') . $request->file('image_emp_file2')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        if ($request->hasFile('image_emp_file3')) {
            $request->merge([
                // local file upload, VPS
                'image_emp_link3' => config('alphaenvironment.LOCAL_URL') . $request->file('image_emp_file3')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        if ($request->hasFile('image_emp_file4')) {
            $request->merge([
                // local file upload, VPS
                'image_emp_link4' => config('alphaenvironment.LOCAL_URL') . $request->file('image_emp_file4')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        $employee->update($request->all());
        return redirect()->route('employee.show', [
            'employee' => $employee
        ]);
    }
    public function edit_scan_license()
    {
        return Inertia::render('viewjs/employee/edit_scan_license');
    }

    public function show(Employee $employee)
    {
        return Inertia::render('viewjs/employee/show',
            ['employee' => $employee]
        );
    }

    public function index(StoreEmployeeRequest $request)
    {
        if ($request["name"]) { // if index has search parameter
            $employees = Employee::where("name", "like", "%" . $request["name"] . "%")->get();
            return Inertia::render('viewjs/employee/index', [
                'employees' => $employees,
                'name' => $request["name"],
            ]);
        } else // if index has no search parameter show all
            return Inertia::render('viewjs/employee/index', [
                'employees' => Employee::get()
            ]);
    }

    public function destroy(Employee $employee)
    {
        //
    }
}
