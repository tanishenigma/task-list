import mongoose from "mongoose";
/* After defining types you need to label or configure.
	The Colon(Annotation) (:) is for Labeling-> Used in
 functions arguments and variable declarations.

 The Brackets(Generic) (<>) are for Configuring

*/
interface ITask extends Document {
  text: string;
  _id: mongoose.Types.ObjectId;
  __v: number;
}

interface ITaskJSON {
  id?: string;
  text?: string;
  _id?: mongoose.Types.ObjectId;
  __v?: number;
}
const TaskSchema = new mongoose.Schema<ITask>(
  {
    text: { type: String, required: true },
  },
  { timestamps: true },
);

TaskSchema.set("toJSON", {
  transform: (document, returnedObject: ITaskJSON) => {
    returnedObject.id = document._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Task = mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);

export default Task;
