import type { ColumnsType } from 'antd/es/table';
import { DataType } from '../../interfaces/tableData';
 export const columns: ColumnsType<DataType> = [
    {
      title: 'اسم الدواء',
      dataIndex: 'drugName',
    },
    {
      title: 'الباركود المحلي',
      dataIndex: 'barcode',
    },
    {
      title: 'القسم',
      dataIndex: 'department',
    },
    {
      title: 'التصنيف',
      dataIndex: 'calssification',
    },
    {
      title: 'الشكل الدوائي',
      dataIndex: 'drugShape',
    },
    {
      title: 'التحكم',
      dataIndex:'control',
    },
  ];