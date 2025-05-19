import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters"],
    maxLength: [30, "First name cannot exceed 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least 3 characters"],
    maxLength: [30, "Last name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be exactly 10 digits"],
    maxLength: [10, "Phone number must be exactly 10 digits"],
  },
  time: {
    type: String, // or Date if you want to handle time objects
    required: true,
  },
  date: {
    type: String, // or Date if you want
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
