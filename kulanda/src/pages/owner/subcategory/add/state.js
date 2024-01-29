import React, {useEffect} from 'react';
import { useForm } from "../../../../hooks/form";
import { service } from '../../../../services';
import { appMessages } from '../../../../utils/messages';
import { responseStatus } from '../../../../utils/responseStatus';
import { useApp } from '../../../app';
import { formDataInitialState } from './util';
import {toast} from "react-toastify";

export const useAddSubcategory = ({navigationState}) => {

    const {subcategory, isUpdate = false} = navigationState || {};
    const { navigate, navigateGoBack } = useApp();

    const { formData, setFormValue, clearForm } = useForm({initalState:formDataInitialState});

    const handleSave = async () => {
        //if (!isValidForm(formData)) return;
    
        let response = {};
    
        if (isUpdate) {
          formData.id = subcategory.id;
    
          response = await service.subcategory.update(formData);
        } else {
            console.log(formData);
          response = await service.subcategory.add(formData);
        }
    
        if (response?.status === responseStatus.OK) {
          clearForm();
    
          toast.success(
            isUpdate
              ? appMessages.subcategory.updateSuccess
              : appMessages.subcategory.registerSuccess
          );
    
          if (isUpdate) navigateGoBack();
        } else {
          toast.error(
            isUpdate
              ? appMessages.subcategory.updateError
              : appMessages.subcategory.registerError
          );
        }
      };

    const getEditData = ({
        subcategory
      }) => {
        return {
          name: subcategory?.name,
        }
    }

      useEffect(() => {
        if (!subcategory?.id) return;
    
        setFormValue(
          getEditData({
            subcategory
          })
        );
      }, [subcategory]);

      return {
        handleSave,
        setFormValue,
        navigateGoBack,
        formData,
      };
}

