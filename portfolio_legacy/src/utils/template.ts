import { templateRegistry } from '@/data/template';
import {
  TemplateDataRecord,
  TemplateMetadata,
  TemplateRegistryRecord,
  TemplateSchemaRecord,
  TemplateSlug
} from '@/types';

const createTemplateSchema = <S extends TemplateSchemaRecord<any>>(config: S) =>
  config;

const createTemplateData = <S extends TemplateSchemaRecord<any>>(
  config: TemplateDataRecord<S>
) => config;

const createTemplateRegistry = <R extends TemplateRegistryRecord<any>>(
  config: R
) => config;

const createTemplateMetadata = (config: TemplateMetadata) => config;

const isTemplate = (slug: string): slug is TemplateSlug =>
  slug in templateRegistry;

export {
  createTemplateSchema,
  createTemplateData,
  createTemplateRegistry,
  createTemplateMetadata,
  isTemplate
};
