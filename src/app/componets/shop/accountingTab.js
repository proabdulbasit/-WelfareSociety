"use client"
import React,{ useState } from 'react'
import {AiOutlineUser,AiOutlineDashboard,RiMoneyDollarBoxFill,BsArrowDownCircle} from "../../assets/icons/icons"
import {HiOutlineListBullet} from "react-icons/hi2"
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import axios from '../../lib/axios';
import { useRouter } from 'next/navigation'
import LoadingOverlay from 'react-loading-overlay-nextgen';

export default function AccountingTab(){
    const router = useRouter()
    const [isOpenTab, setisOpen] = useState(0);
    const [isActiveLoader, setisActiveLoader] = useState(false);

    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    const [formData, setFormData] = useState({});
    
    const personalInfoOccupation = watch('personal_info_occupation');
    const paymentInfoType = watch('payment_info_type');
    const doYouHavePreviousId = watch('do_you_have_previous_id');
    
    const updateFormData = (newData) => {
        const updatedFormData = { ...formData, ...newData };
        setFormData(updatedFormData);
    };

    const personalInfomationForm = (formData) => {
        toast.success('Personal Information Saved Successfully.',{
            position: 'top-right',
        });
        updateFormData(formData);
        handleTabClick(1);
    }

    const organizationInfomationForm = (formData) => {
        toast.success('organization Information Saved Successfully.',{
            position: 'top-right',
        });
        updateFormData(formData);
        handleTabClick(2);
    }

    const nomineeInfomationForm = (formData) => {
        toast.success('Nominee & Introducer Information Saved Successfully.',{
            position: 'top-right',
        });
        updateFormData(formData);
        handleTabClick(3);
    }

    const paymentInfomationForm = (formData) => {
        toast.success('Payment Information Saved Successfully.',{
            position: 'top-right',
        });
        updateFormData(formData);
        handleTabClick(4);
    }

    const finalInfomationForm = (formData) => {
        updateFormData(formData);

        const filekeys = ['personal_info_photo', 'personal_info_nid_doc', 'personal_info_passport', 'organization_info_trade_license', 'organization_info_business_card', 'nominee_info_personal_nid', 'final_info_signature'];
        
        for (const key in formData) {
            if (filekeys.includes(key)) {
                formData[key] = formData[key][0]; 
            }
        }

        setisActiveLoader(true);
        
        axios.post('register-member',formData,  {headers: {
            'Content-Type': 'multipart/form-data'
        }}).then((res) => {
            if(res.data.status){
                setisActiveLoader(false);
                router.push('/')
                toast.success(res.data.message,{
                    position: 'top-right',
                });
                
            }else{
                setisActiveLoader(false);
                toast.error(res.data.message,{
                    position: 'top-right',
                });

            }
        }).catch(() => {
            setisActiveLoader(false);
            toast.error("Some thing went wrong",{
                position: 'top-right',
            });
        })
    }

    const handleTabClick = (index) => {
        setisOpen(index);
    };

    return(
        <>
            <LoadingOverlay
                active={isActiveLoader}
                spinner
                className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]"
            >
                <Toaster />
                <div className="lg:col-span-4 md:col-span-4">
                    <div className="sticky top-20">
                        <ul className="p-6 bg-white rounded-md shadow flex-column dark:bg-slate-900 dark:shadow-gray-800" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li role="presentation">
                                <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><AiOutlineDashboard className="text-[20px] me-2 align-middle"/><i ></i>Personal Information</button>
                            </li>
                            <li role="presentation">
                                <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><HiOutlineListBullet className="text-[20px] me-2 align-middle"/>organization Information</button>
                            </li>
                            <li role="presentation">
                                <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><BsArrowDownCircle className="text-[18px] me-2 align-middle"/>Nominee & Introducer Information</button>
                            </li>
                            <li role="presentation">
                                <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><RiMoneyDollarBoxFill className="text-[20px] me-2 align-middle" />Payment Information</button>
                            </li>
                            <li role="presentation">
                                <button onClick={() => handleTabClick(4)} className={`${isOpenTab === 4 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-start font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out flex items-center`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><AiOutlineUser className="text-[20px] me-2 align-middle"/>User Details</button>
                            </li>
                        </ul>
                    </div>
                </div>

                
                <div className="lg:col-span-8 md:col-span-8">
                    <div id="myTabContent" className="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-800">
                        {isOpenTab === 0 ? 
                            <div role="tabpanel" aria-labelledby="accountdetail-tab">
                                <h5 className="mb-4 text-lg font-semibold">Personal Detail :</h5>
                                <form onSubmit={handleSubmit(personalInfomationForm)}>
                                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
                                        <div>
                                            <label className="font-medium form-label">First Name : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name:" {...register('personal_info_name', {required:true})} />

                                                {errors.personal_info_name && errors.personal_info_name.type == 'required' && <p className='text-red-800'>Please enter name</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
                                        <div>
                                            <label className="font-medium form-label">Your Email : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email" {...register('final_info_email', {required:true})} />

                                                {errors.final_info_email && errors.final_info_email.type == 'required' && <p className='text-red-800'>Please enter email</p>}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">Phone No. :</label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone :"  {...register('final_info_phone_number', {required:true})}/>

                                                {errors.final_info_phone_number && errors.final_info_phone_number.type == 'required' && <p className='text-red-800'>Please enter phone number</p>}
                                            </div>
                                        </div>   

                                        <div>
                                            <label className="font-medium form-label">Father Name : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Father Name:" {...register('personal_info_father_name', {required:true})} />

                                                {errors.personal_info_father_name && errors.personal_info_father_name.type == 'required' && <p className='text-red-800'>Please enter father name</p>}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="font-medium form-label">Mother Name : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Mother Name:" {...register('personal_info_mother_name', {required:true})} />

                                                {errors.personal_info_mother_name && errors.personal_info_mother_name.type == 'required' && <p className='text-red-800'>Please enter mother name</p>}
                                            </div>
                                        </div>
                                    
                                        <div>
                                            <label className="font-medium form-label">Date of birth : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="date" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Date of birth:"  {...register('personal_info_date_of_birth', {required:true})} />

                                                {errors.personal_info_date_of_birth && errors.personal_info_date_of_birth.type == 'required' && <p className='text-red-800'>Please select date of birth</p>}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">Gender : </label>
                                            <div className="relative mt-2 form-icon">
                                                <select className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-select form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" {...register('personal_info_gender', {required:true})}>
                                                    <option value="">Select a option</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>

                                                {errors.personal_info_gender && errors.personal_info_gender.type == 'required' && <p className='text-red-800'>Please select gender</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium form-label">Nationality : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Nationality:"  {...register('personal_info_nationality', {required:true})} />

                                                {errors.personal_info_nationality && errors.personal_info_nationality.type == 'required' && <p className='text-red-800'>Please enter nationality</p>}
                                            </div>
                                        </div>
                                    
                                        <div>
                                            <label className="font-medium form-label">NID No : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="NID No:"  {...register('personal_info_nid_no', {required:true})} />

                                                {errors.personal_info_nid_no && errors.personal_info_nid_no.type == 'required' && <p className='text-red-800'>Please enter NID No.</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium form-label">Occupation : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <select className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-select form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" {...register('personal_info_occupation', {required:true})}>
                                                    <option value="">Select a option</option>
                                                    <option value="Photographer+">Photographer</option>
                                                    <option value="Videographer">Videographer</option>
                                                    <option value="Editor">Editor</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {errors.personal_info_occupation && errors.personal_info_occupation.type == 'required' && <p className='text-red-800'>Please enter Occupation.</p>}
                                            </div>
                                        </div>
                                        {personalInfoOccupation == 'Other' ? 
                                            <div>
                                                <label className="font-medium form-label">Occupation Name: <span className="text-red-600">*</span></label>
                                                <div className="relative mt-2 form-icon">
                                                    <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Occupation Name" {...register('personal_info_occupation_value', {required:true})} />
                                                        
                                                    {errors.personal_info_occupation_value && errors.personal_info_occupation_value.type == 'required' && <p className='text-red-800'>Please enter Occupation Name.</p>}
                                                </div>
                                            </div>
                                        : ""}
                                        
                                        <div>
                                            <label className="font-medium form-label">Blood group : </label>
                                            <div className="relative mt-2 form-icon">
                                                <select className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-select form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" {...register('personal_info_blood_group', {required:true})}>
                                                    <option value="">Select a option</option>
                                                    <option value="O positive+">O positive</option>
                                                    <option value="O negative">O negative</option>
                                                    <option value="A positive">A positive</option>
                                                    <option value="A negative">A negative</option>
                                                    <option value="B positive">B positive</option>
                                                    <option value="B negative">B negative</option>
                                                    <option value="AB positive">AB positive</option>
                                                    <option value="AB negative">AB negative</option>
                                                </select>
                                                {errors.personal_info_blood_group && errors.personal_info_blood_group.type == 'required' && <p className='text-red-800'>Please select blood group.</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-semibold form-label">Present Address </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Present Address" {...register('personal_info_present_address', {required:true})} />
                                                {errors.personal_info_present_address && errors.personal_info_present_address.type == 'required' && <p className='text-red-800'>Please enter present address.</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-semibold form-label">Permanent Address </label>

                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Permanent Address" {...register('personal_info_permanent_address', {required:true})} />
                                                {errors.personal_info_permanent_address && errors.personal_info_permanent_address.type == 'required' && <p className='text-red-800'>Please enter permanent address.</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium form-label">Photo : </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="file" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"  {...register('personal_info_photo', {required:true})} />
                                                {errors.personal_info_photo && errors.personal_info_photo.type == 'required' && <p className='text-red-800'>Please select photo document.</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium form-label">NID : </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="file" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"  {...register('personal_info_nid_doc')} />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium form-label">Passport : </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="file" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"  {...register('personal_info_passport')} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="inline-block px-5 py-2 mt-5 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700" >Next step</button>
                                    </div>
                                </form>
                            </div>
                        :""}
                        
                        {isOpenTab === 1 ? 
                            <div id="organizationInformation" role="tabpanel" aria-labelledby="accountdetail-tab">
                                <h5 className="mb-4 text-lg font-semibold">organization Information :</h5>

                                <form onSubmit={handleSubmit(organizationInfomationForm)}>
                                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                        <div>
                                            <label className="font-medium form-label">organization Name : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="organization Name:" {...register('organization_info_name', {required:true})} />

                                                {errors.organization_info_name && errors.organization_info_name.type == 'required' && <p className='text-red-800'>Please enter name</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium form-label">organization Phone : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="organization Phone:" {...register('organization_info_phone', {required:true})} />

                                                {errors.organization_info_phone && errors.organization_info_phone.type == 'required' && <p className='text-red-800'>Please enter phone number</p>}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">organization Email : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="organization Email:" {...register('organization_info_email', {required:true})} />

                                                {errors.organization_info_email && errors.organization_info_email.type == 'required' && <p className='text-red-800'>Please enter email</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium form-label">Trade license : </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="file" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" {...register('organization_info_trade_license')} />

                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">Business Card : </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="file" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" {...register('organization_info_business_card')} />
                                                
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-semibold form-label">organization Address </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="organization Address" {...register('organization_info_address', {required:true})} />
                                                {errors.organization_info_address && errors.organization_info_address.type == 'required' && <p className='text-red-800'>Please enter address</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button className="inline-block px-5 py-2 mt-5 mr-5 text-base font-semibold tracking-wide text-center align-middle duration-500 border rounded-md text-indigo bg-white-600 border-white-600 hover:bg-white-700 hover:border-white-700" onClick={() => handleTabClick(0)}>Previous step</button>

                                        <button type='submit' className="inline-block px-5 py-2 mt-5 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Next step</button>
                                    </div> 
                                </form>
                            </div>
                        : ""}
                        
                        {isOpenTab === 2 ? 
                            <div id="nomineeAndIntroducerInformation" role="tabpanel" aria-labelledby="accountdetail-tab">
                                <h5 className="mb-4 text-lg font-semibold">Nominee & Introducer Information :</h5>

                                <form onSubmit={handleSubmit(nomineeInfomationForm)}>
                                    <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-1">
                                        <div>
                                            <label className="font-semibold form-label">Nominee Name </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Nominee Name" {...register('nominee_info_name', {required:true})} />
                                                {errors.nominee_info_name && errors.nominee_info_name.type == 'required' && <p className='text-red-800'>Please enter name</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-semibold form-label">Nominee Address </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Nominee Address" {...register('nominee_info_address', {required:true})} />
                                                {errors.nominee_info_address && errors.nominee_info_address.type == 'required' && <p className='text-red-800'>Please enter address</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2"> 
                                        <div>
                                            <label className="font-medium form-label">Date of birth : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="date" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Date of birth:" {...register('nominee_info_date_of_birth', {required:true})} />

                                                {errors.nominee_info_date_of_birth && errors.nominee_info_date_of_birth.type == 'required' && <p className='text-red-800'>Please select date of birth</p>}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">NID No : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="NID No:" {...register('nominee_info_nid_no', {required:true})} />

                                                {errors.nominee_info_nid_no && errors.nominee_info_nid_no.type == 'required' && <p className='text-red-800'>Please enter NID No</p>}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">Relation : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Relation:" {...register('nominee_info_relation', {required:true})} />

                                                {errors.nominee_info_relation && errors.nominee_info_relation.type == 'required' && <p className='text-red-800'>Please enter relation</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='mt-5' />
                                    
                                    <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-1">
                                        <div>
                                            <label className="font-medium form-label">Introducer Name : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Introducer Name:" {...register('nominee_info_introducer_name', {required:true})} />

                                                {errors.nominee_info_introducer_name && errors.nominee_info_introducer_name.type == 'required' && <p className='text-red-800'>Please enter introducer name</p>}
                                            </div>
                                        </div>    
                                    </div> 
                                    
                                    <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2"> 
                                        <div>
                                            <label className="font-medium form-label">Introducer Name : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Introducer Name:" {...register('nominee_info_introducer_name', {required:true})} />

                                                {errors.nominee_info_introducer_name && errors.nominee_info_introducer_name.type == 'required' && <p className='text-red-800'>Please enter introducer name</p>}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">Membership No : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Membership No:" {...register('nominee_info_member_no', {required:true})} />

                                                {errors.nominee_info_member_no && errors.nominee_info_member_no.type == 'required' && <p className='text-red-800'>Please enter membership no</p>}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">Mobile No : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Mobile No:" {...register('nominee_info_mobile', {required:true})} />

                                                {errors.nominee_info_mobile && errors.nominee_info_mobile.type == 'required' && <p className='text-red-800'>Please enter mobile no</p>}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="font-medium form-label">Nominated person NId : <span className="text-red-600">*</span></label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="file" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" {...register('nominee_info_personal_nid')} />

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button className="inline-block px-5 py-2 mt-5 mr-5 text-base font-semibold tracking-wide text-center align-middle duration-500 border rounded-md text-indigo bg-white-600 border-white-600 hover:bg-white-700 hover:border-white-700" onClick={() => handleTabClick(1)}>Previous step</button>

                                        <button type='submit' className="inline-block px-5 py-2 mt-5 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Next step</button>
                                    </div>
                                </form>
                            </div>
                        :""}
                        
                        {isOpenTab === 3 ? 
                            <div id="paymentInformation" role="tabpanel" aria-labelledby="accountdetail-tab">
                                <h5 className="mb-4 text-lg font-semibold">Payment Information :</h5>
                                    <form onSubmit={handleSubmit(paymentInfomationForm)}>
                                        <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2">
                                            <div>
                                                <label className="font-medium form-label">Payment Type : </label>
                                                <div className="relative mt-2 form-icon">
                                                    <select className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-select form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" {...register('payment_info_type', {required:true})}>
                                                        <option value="">Select a option</option>
                                                        <option value="Bkash">Bkash</option>
                                                        <option value="Rocket">Rocket</option>
                                                        <option value="Upay">Upay</option>
                                                        <option value="Cash">Cash</option>
                                                    </select>

                                                    {errors.payment_info_type && errors.payment_info_type.type == 'required' && <p className='text-red-800'>Please slect payment type</p>}
                                                </div>
                                            </div>

                                            {
                                                paymentInfoType != 'Cash'
                                                ?
                                                    <div>
                                                        <label className="font-medium form-label">Payment refrence : </label>
                                                        <div className="relative mt-2 form-icon">
                                                            <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Payment refrence:" {...register('payment_info_reference', {required:true})} />

                                                            {errors.payment_info_reference && errors.payment_info_reference.type == 'required' && <p className='text-red-800'>Please slect refrence</p>}
                                                        </div>
                                                    </div>
                                                : ""
                                            }
                                            
                                        </div>

                                        <div>
                                            <button className="inline-block px-5 py-2 mt-5 mr-5 text-base font-semibold tracking-wide text-center align-middle duration-500 border rounded-md text-indigo bg-white-600 border-white-600 hover:bg-white-700 hover:border-white-700" onClick={() => handleTabClick(2)}>Previous step</button>

                                            <button type='submit' className="inline-block px-5 py-2 mt-5 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Final step</button>
                                        </div>
                                    </form>
                            </div>
                        :""}

                        {isOpenTab === 4 ? <div id="accountdetail" role="tabpanel" aria-labelledby="accountdetail-tab">
                            <h5 className="mb-4 text-lg font-semibold">Personal Detail :</h5>
                            <form onSubmit={handleSubmit(finalInfomationForm)}>
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                    <div>
                                        <label className="font-medium form-label">Your Password : <span className="text-red-600">*</span></label>
                                        <div className="relative mt-2 form-icon">
                                            <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Password" {...register('final_info_password', {required:true})} />

                                            {errors.final_info_password && errors.final_info_password.type == 'required' && <p className='text-red-800'>Please enter password</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-medium form-label">Username : </label>
                                        <div className="relative mt-2 form-icon">
                                            <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Username :" {...register('final_info_username', {required:true})}/>

                                            {errors.final_info_username && errors.final_info_username.type == 'required' && <p className='text-red-800'>Please enter username</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-medium form-label">signature :</label>
                                        <div className="relative mt-2 form-icon">
                                            <input type="file" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" {...register('final_info_signature', )}/>

                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-medium form-label">Do you have previous id :</label>
                                        <div className="relative mt-2 form-icon">
                                            <input type="checkbox" className="h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" value={1} {...register('do_you_have_previous_id', )}/>
                                        </div>
                                    </div>

                                    {
                                        doYouHavePreviousId == 1 ?
                                        <div>
                                            <label className="font-medium form-label">Previous Id : </label>
                                            <div className="relative mt-2 form-icon">
                                                <input type="text" className="w-full h-10 px-3 py-2 bg-transparent border border-gray-200 rounded outline-none form-input dark:bg-slate-900 dark:text-slate-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Previous Id :" {...register('previous_id', {required:true})}/>

                                                {errors.previous_id && errors.previous_id.type == 'required' && <p className='text-red-800'>Please enter Previous Id</p>}
                                            </div>
                                        </div>
                                        :""
                                    }
                                </div>

                                <div>
                                    <button className="inline-block px-5 py-2 mt-5 mr-5 text-base font-semibold tracking-wide text-center align-middle duration-500 border rounded-md text-indigo bg-white-600 border-white-600 hover:bg-white-700 hover:border-white-700" onClick={() => handleTabClick(3)}>Previous step</button>

                                    <button type='submit' className="inline-block px-5 py-2 mt-5 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700">Complete Registration</button>

                                </div>
                            </form>

                        </div>:""}
                    </div>
                
                </div>
            </LoadingOverlay>
        </>
    )
}