import Mustache from "mustache";
import Contact from "../models/Contact";

export default (body: string, contact: Contact): string => {
  const view = {
    name: contact ? contact.name : "",
    id: contact ? contact.id : ""
  };
  return Mustache.render(body, view);
};
