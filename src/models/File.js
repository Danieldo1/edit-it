import { models,Schema,model } from "mongoose"

const FileSchema = new Schema({
  url: {type:String, required:true},
  description: {type:String, required:true},
  style: {type:String, required:true},

}, {
  timestamps: true
})

export const File = models?.File || model('File', FileSchema)