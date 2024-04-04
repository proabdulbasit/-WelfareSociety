'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link"
// import { useRouter } from "next/router";
import axios from "../lib/axios";

export default function AccountTab({params}){
    // const router = useRouter()
    let [member, setMember] = useState({});
    
    const getMemberInfo = () => {
        axios.get(`member-info/${params.memberDetailId}`).then((res) => {
            if(res.data.status){
                setMember(res.data.data)
            }else{
                router.push('/member'+params.memberId)
                toast.error("Something went wrong",{
                    position: 'top-right',
                });
            }
        }).catch(() => {
            // router.push('/member'+params.memberId)
            toast.error("Something went wrong",{
                position: 'top-right',
            });
        })
    }

    useEffect(() => {
        getMemberInfo();
    }, []); 
    
    return(
      <>
        <div className="lg:col-span-12 md:col-span-12">
          <div id="myTabContent" className="p-6 bg-white rounded-md shadow dark:bg-slate-900 dark:shadow-gray-800">
              <div role="tabpanel" aria-labelledby="accountdetail-tab">
                  <div className="grid grid-cols-1 gap-5 mb-5 lg:grid-cols-2">
                    <Image src={member.profile_image} width={112} height={112} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />              
                  </div>
                  
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      <div>
                          <label className="font-medium form-label">Name :</label>
                          <div className="relative mt-2 form-icon">
                            {member.name}
                          </div>
                      </div>
                      <div>
                          <label className="font-medium form-label">Membership No :</label>
                          <div className="relative mt-2 form-icon">
                            {member.member_id}
                          </div>
                      </div>
                      
                      <div>
                          <label className="font-medium form-label">Phone : </label>
                          <div className="relative mt-2 form-icon">
                          <Link href={'tel:'+member.phone_number}>
                            {member.phone_number}
                          </Link>
                          </div>
                      </div>
                      
                      <div>
                          <label className="font-medium form-label">Email : </label>
                          <div className="relative mt-2 form-icon">
                          <Link href={'mailto:'+member.email}>
                            {member.email}
                          </Link>
                          </div>
                      </div>

                      <div>
                          <label className="font-medium form-label">Blood group : </label>
                          <div className="relative mt-2 form-icon">
                          {member.blood_group}
                          </div>
                      </div>

                      <div>
                              <label className="font-medium form-label">organization Name : <span className="text-red-600">*</span></label>
                              <div className="relative mt-2 form-icon">
                                {member.organization_information ? member.organization_information.name : ""}
                              </div>
                          </div>

                          <div>
                              <label className="font-medium form-label">organization Phone : <span className="text-red-600">*</span></label>
                              <div className="relative mt-2 form-icon">
                              {member.organization_information ? member.organization_information.phone : ""}
                              </div>
                          </div>
                          
                          <div>
                              <label className="font-medium form-label">organization Email : <span className="text-red-600">*</span></label>
                              <div className="relative mt-2 form-icon">
                              {member.organization_information ? member.organization_information.email : ""}
                              </div>
                          </div>

                          <div>
                              <label className="font-semibold form-label">organization Address </label>
                              <div className="relative mt-2 form-icon">
                              {member.organization_information ? member.organization_information.address : ""}
                              </div>
                          </div>
                     
                  </div>                      
              </div>
          </div>
        </div>
      </>
    )
}