import React, {useEffect} from 'react';
import { useForm } from "../../../../hooks/form";
import { service } from '../../../../services';
import { appMessages } from '../../../../utils/messages';
import { responseStatus } from '../../../../utils/responseStatus';
import { useApp } from '../../../app';
import { formDataInitialState } from './util';
import {toast} from "react-toastify";

export const useAddProduct = ({navigationState}) => {

    const {product, isUpdate = false} = navigationState || {};
    const { navigate, navigateGoBack } = useApp();

    const { formData, setFormValue, clearForm } = useForm({initalState:formDataInitialState});

    const handleSave = async () => {
        //if (!isValidForm(formData)) return;
    
        let response = {};
    
        if (isUpdate) {
          formData.id = product.id;
    
          response = await service.product.update(formData);
        } else {
            console.log(formData);
          response = await service.product.add(formData);
        }
    
        if (response?.status === responseStatus.OK) {
          clearForm();
    
          toast.success(
            isUpdate
              ? appMessages.product.updateSuccess
              : appMessages.product.registerSuccess
          );
    
          if (isUpdate) navigateGoBack();
        } else {
          toast.error(
            isUpdate
              ? appMessages.product.updateError
              : appMessages.product.registerError
          );
        }
      };

    const getEditData = ({
        product
      }) => {
        return {
          name: product?.name,
        }
    }

      useEffect(() => {
        if (!product?.id) return;
    
        setFormValue(
          getEditData({
            product
          })
        );
      }, [product]);

      return {
        handleSave,
        setFormValue,
        navigateGoBack,
        formData,
      };
}

