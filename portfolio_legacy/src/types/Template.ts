import { Metadata } from 'next';
import { ComponentProps, ComponentType } from 'react';

import { templateRegistry } from '@/data/template';

import { Locale } from './Locale';
import { Theme } from './Theme';

type TemplateType = 'default' | 'legal' | 'error';

type TemplateSlug = keyof typeof templateRegistry;

type TemplateSchema<C extends ComponentType<any>> = {
  theme: Theme;
  Comp: C;
};

type TemplateSchemaRecord<C extends Record<string, ComponentType<any>>> = {
  [K in keyof C]: TemplateSchema<C[K]>;
};

type TemplateSchemaLoader<S extends TemplateSchemaRecord<any>> =
  () => Promise<S>;

type TemplateData<S extends TemplateSchema<any>> = ComponentProps<
  S['Comp']
>['data'];

type TemplateDataRecord<S extends Record<string, TemplateSchema<any>>> = {
  [K in keyof S]: TemplateData<S[K]>;
};

type TemplateDataLoader<S extends TemplateSchemaLoader<any>> = () => Promise<
  TemplateDataRecord<Awaited<ReturnType<S>>>
>;
type TemplateMetadata = Metadata;

type TemplateMetadataLoader = () => Promise<TemplateMetadata>;

type TemplateRegistry<S extends TemplateSchemaLoader<any>> = {
  type: TemplateType;
  isSelected?: boolean;
  schema: S;
  data: (locale: Locale) => TemplateDataLoader<S>;
  metadata: (locale: Locale) => TemplateMetadataLoader;
};

type TemplateRegistryRecord<
  S extends Record<string, TemplateSchemaLoader<any>>
> = {
  [K in keyof S]: TemplateRegistry<S[K]>;
};

export type {
  TemplateType,
  TemplateSlug,
  TemplateSchema,
  TemplateSchemaRecord,
  TemplateSchemaLoader,
  TemplateData,
  TemplateDataRecord,
  TemplateDataLoader,
  TemplateMetadata,
  TemplateMetadataLoader,
  TemplateRegistry,
  TemplateRegistryRecord
};
