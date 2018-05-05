import React from 'react'
import BaseModal from './BaseModal';
import {VkAuthContainer} from '@/containers/auth';

export default props => (
    <BaseModal hideCloseButton {...props}>
        <VkAuthContainer/>
    </BaseModal>
)
