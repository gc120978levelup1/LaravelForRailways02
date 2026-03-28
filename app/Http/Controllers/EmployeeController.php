<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create_scan_license()
    {
        return Inertia::render('viewjs/employee/create_scan_license');
    }

    public function create_upload_2ids()
    {
        return Inertia::render('viewjs/employee/create_upload_2ids');
    }

    public function create_upload_4pics()
    {
        return Inertia::render('viewjs/employee/create_upload_4pics');
    }

    public function create_check_all_inputs()
    {
        return Inertia::render('viewjs/employee/create_check_all_inputs');
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEmployeeRequest $request)
    {
        // saving and extracting uploaed picture
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
        if ($request->hasFile('image_id_file1')) {
            $request->merge([
                // local file upload, VPS
                'image_id_link1' => config('alphaenvironment.LOCAL_URL') . $request->file('image_id_file1')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        if ($request->hasFile('image_id_file2')) {
            $request->merge([
                // local file upload, VPS
                'image_id_link2' => config('alphaenvironment.LOCAL_URL') . $request->file('image_id_file2')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        if ($request->hasFile('image_id_file3')) {
            $request->merge([
                // local file upload, VPS
                'image_id_link3' => config('alphaenvironment.LOCAL_URL') . $request->file('image_id_file3')->store(config('alphaenvironment.SUB_FLDR_IMAGES'), 'public'),
            ]);
        }
        $employee = Employee::create($request->all());
        return redirect()->route(
            'employee.show',[
                'employee' => $employee
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return Inertia::render(
            'viewjs/employee/show',
            ['employee' => $employee]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
