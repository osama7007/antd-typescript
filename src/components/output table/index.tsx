import React from 'react';
import { Divider, Table } from 'antd';
import { DataType } from '../../interfaces/tableData';
import { columns } from './columns';
import { useEffect , useState } from 'react';
import { useAppSelector } from '../../redux/hooks';


const OutputTable = () => {
  const drugValues = useAppSelector((state) => state.drugs.drugValues)
  const [data , setData] = useState([...drugValues])

  useEffect(() => {
   setData([...drugValues]);
  }, [drugValues])
  

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default OutputTable