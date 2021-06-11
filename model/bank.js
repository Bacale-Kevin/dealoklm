import mongoose from 'mongoose'
import { string } from 'prop-types'
import { StrictMode } from 'react'

const bankSchema = new mongoose.Schema({
    photo: {
        data: Buffer,
        contentType: String
    },
    title: {
        type: String,
        required: [true, 'Enter bank name']
    },
    // description: {
    //     type: String,
    //     required: [true, 'Enter bank description']
    // },
    // btnText: {
    //     type: String,
    //     required: [true, 'Enter bank button text']
    // },
    // bonPlanDetailTitle: {
    //     type: String,
    //     required: [true, 'Enter detail title name']
    // },
    // bonPlanDetailDesc: {
    //     type: String,
    //     require: [true,'Enter bank details description']
    // },
    // stepOne: {
    //     type: String,
    //     default: "Step 1"
    // },
    // stepOneDescription: {
    //     type: String,
    // },
    // stepTwo: {
    //     type: String,
    //     default: "Step 2"
    // },
    // stepTwoeDescription: {
    //     type: String,
    // },
    // stepThree: {
    //     type: String,
    //     default: "Step 3"
    // },
    // stepThreeeDescription: {
    //     type: String,
    // },
    // stepFour: {
    //     type: String,
    //     default: "Step 4"
    // },
    // stepFoureDescription: {
    //     type: String,
    // },
    // stepFive: {
    //     type: String,
    //     default: "Step 5"
    // },
    // stepFiveDescription: {
    //     type: String,
    // },
    // faqTitle: {
    //     type: String,
    // },
    // faqOne: {
    //     type: String,
    // },
    // faqOneDescription:{
    //     type: String
    // },
    // faqTwo: {
    //     type: String,
    // },
    // faqTwoDescription:{
    //     type: String
    // },
    // faqThree: {
    //     type: String,
    // },
    // faqThreeDescription:{
    //     type: String
    // },
    // faqFour: {
    //     type: String,
    // },
    // faqFourDescription:{
    //     type: String
    // },
    // faqFive: {
    //     type: String,
    // },
    // faqFiveDescription:{
    //     type: String
    // },
})

export default mongoose.models.Bank || mongoose.model('Bank', bankSchema)