import Contact from "../models/Contact.js";

export const listContacts = ({ filter = {}, fields, setting = {} }) =>
  Contact.find(filter, fields, setting);

export const getContactById = async (_id) => Contact.findById(_id);

export const removeContact = async (id) => Contact.findByIdAndDelete(id);

export const addContact = (data) => Contact.create(data);

export const updateContactById = (id, data) =>
  Contact.findByIdAndUpdate(id, data);
