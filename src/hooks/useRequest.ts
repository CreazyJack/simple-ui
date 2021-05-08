/*
 * @Description: request hook
 * @Date: 2021-04-30 16:41:30
 * @LastEditors: JackyChou
 * @LastEditTime: 2021-04-30 16:53:11
 */

import { useState } from 'react';

type ConfigProps = { manual: boolean };

type ServiceType = (data: unknown) => Promise<unknown>;

type StateProps = { loading?: boolean; data?: unknown };

const useRequest = (service: ServiceType, config: ConfigProps) => {
  const [data, setData] = useState<StateProps>({});
  return data;
};

export default useRequest;
