import React, {useEffect} from 'react';
import { useForm } from "../../../../hooks/form";
import { service } from '../../../../services';
import { appMessages } from '../../../../utils/messages';
import { responseStatus } from '../../../../utils/responseStatus';
import { useApp } from '../../../app';
import { formDataInitialState } from './util';
import {toast} from "react-toastify";

export const useAddModel = ({navigationState}) => {

    const {model, isUpdate = false} = navigationState || {};
    const { navigate, navigateGoBack } = useApp();

    const { formData, setFormValue, clearForm } = useForm({initalState:formDataInitialState});

    const handleSave = async () => {
        //if (!isValidForm(formData)) return;
    
        let response = {};
    
        if (isUpdate) {
          formData.id = model.id;
    
          response = await service.model.update(formData);
        } else {
            console.log(formData);
          response = await service.model.add(formData);
        }
    
        if (response?.status === responseStatus.OK) {
          clearForm();
    
          toast.success(
            isUpdate
              ? appMessages.model.updateSuccess
              : appMessages.model.registerSuccess
          );
    
          if (isUpdate) navigateGoBack();
        } else {
          toast.error(
            isUpdate
              ? appMessages.model.updateError
              : appMessages.model.registerError
          );
        }
      };

    const getEditData = ({
        category
      }) => {
        return {
          name: category?.name,
        }
    }

      useEffect(() => {
        if (!category?.id) return;
    
        setFormValue(
          getEditData({
            category
          })
        );
      }, [category]);

      return {
        handleSave,
        setFormValue,
        navigateGoBack,
        formData,
      };
}

