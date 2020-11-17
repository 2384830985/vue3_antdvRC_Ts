<template>
    <a-form
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
    >
        <a-form-item ref="name" label="Activity name" name="name">
            <a-input v-model:value="form.name" />
        </a-form-item>
        <a-form-item label="Activity zone" name="region">
            <a-select v-model:value="form.region" placeholder="please select your zone">
                <a-select-option value="shanghai">
                    Zone one
                </a-select-option>
                <a-select-option value="beijing">
                    Zone two
                </a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item label="Activity time" require name="date1">
            <a-date-picker
                    v-model:value="form.date1"
                    show-time
                    type="date"
                    placeholder="Pick a date"
                    style="width: 100%;"
            />
        </a-form-item>
        <a-form-item label="Instant delivery" name="delivery">
            <a-switch v-model:checked="form.delivery" />
        </a-form-item>
        <a-form-item label="Activity type" name="type">
            <a-checkbox-group v-model:value="form.type">
                <a-checkbox value="1" name="type">
                    Online
                </a-checkbox>
                <a-checkbox value="2" name="type">
                    Promotion
                </a-checkbox>
                <a-checkbox value="3" name="type">
                    Offline
                </a-checkbox>
            </a-checkbox-group>
        </a-form-item>
        <a-form-item label="Resources" name="resource">
            <a-radio-group v-model:value="form.resource">
                <a-radio value="1">
                    Sponsor
                </a-radio>
                <a-radio value="2">
                    Venue
                </a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="Activity form" name="desc">
            <a-textarea v-model:value="form.desc" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="onSubmit">
                Create1
            </a-button>
            <a-button style="margin-left: 10px;" @click="resetForm">
                Reset
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, reactive } from 'vue'

interface FormInterface {
    name: string;
    region: string;
    date1: string;
    delivery: boolean;
    type: string[];
    resource: string;
    desc: string;
}

export default defineComponent({
    setup(){
        const form = reactive<FormInterface>({
            name: '',
            region: "",
            date1: "",
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        })
        const rules = reactive({
            name: [
                { required: true, message: 'Please input Activity name', trigger: 'blur' },
                { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
            ],
            region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
            date1: [
                { required: true, message: 'Please pick a date', trigger: 'change', type: 'object' },
            ],
            type: [
                {
                    type: 'array',
                    required: true,
                    message: 'Please select at least one activity type',
                    trigger: 'change',
                },
            ],
            resource: [
                { required: true, message: 'Please select activity resource', trigger: 'change' },
            ],
            desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
        })
        const ruleForm = ref<{validateFields: (NamePath: (string | number)[]) => Promise<any>} | any>(null)
        const onSubmit = (e: MouseEvent) => {
            ruleForm.value.validateFields().then((err: FormInterface, values: any) => {
                if (!err) {
                    console.log('Received values of form: ', values)
                }
            })
        }
        const resetForm = (e: MouseEvent) => {
            ruleForm.value.resetFields()
        }
        return {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            onSubmit,
            ruleForm,
            resetForm,
            form,
            rules
        }
    }
})
</script>

<style>

</style>
