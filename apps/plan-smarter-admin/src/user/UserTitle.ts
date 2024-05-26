import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "id";

export const UserTitle = (record: TUser): string => {
  return record.id?.toString() || String(record.id);
};
