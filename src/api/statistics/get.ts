import { Locale } from '@/types';
import { request } from '@/utils';

import { StatisticsResponse } from '../../app/api/statistics/route';

type Params = {
  locale: Locale['value'];
};

const statisticsApiGet = async (
  params: Params,
  config?: Parameters<typeof request>['1']
) =>
  await request<StatisticsResponse>(
    `/api/statistics?locale=${params.locale}`,
    config
  );

export default statisticsApiGet;