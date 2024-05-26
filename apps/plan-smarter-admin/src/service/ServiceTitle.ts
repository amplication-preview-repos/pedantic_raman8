import { Service as TService } from "../api/service/Service";

export const SERVICE_TITLE_FIELD = "id";

export const ServiceTitle = (record: TService): string => {
  return record.id?.toString() || String(record.id);
};
