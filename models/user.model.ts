import mongoose from "mongoose";

/* This is what goes to mongodb It is an interface that has all the functionalities of a mongoose Document. */
interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  _id: mongoose.Types.ObjectId;
  __v: number;
}
/* This is the interface of JSON object that is generated when you call
.toJSON() */
interface IUserJSON {
  id?: string;
  name: string;
  email: string;
  passwordHash?: string;
  _id?: mongoose.Types.ObjectId;
  __v?: number;
}
/* Why Add ? fields -> To solve the Typescript rule regarding the delete operator
TypeScript does not allow you to delete a propertyg that is required.

If I had used IUser (where passwordHash is required), TypeScript would shout at me:

"You cannot delete passwordHash because IUser says it MUST always exist!"

By creating IUserJSON and marking those fields as optional (?), I am legally allowing them to be deleted.
*/
const UserSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, trim: true, required: true },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    passwordHash: { type: String, trim: true, required: true },
  },
  { timestamps: true },
);

UserSchema.set("toJSON", {
  transform: (document, returnedObject: IUserJSON) => {
    returnedObject.id = document._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
