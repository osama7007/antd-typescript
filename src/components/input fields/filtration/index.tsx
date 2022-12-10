import { Button,Form, Input ,Select ,Pagination  } from 'antd';
import { AiOutlineSearch , AiOutlineFilter } from 'react-icons/ai';
import { TbLetterX } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import styles from "./filtration.module.css"
const Filtration:React.FC = () => {
    const dispatch = useDispatch();
    const { Option } = Select;

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };

  return (
    <div className={styles.filter} >
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span:25}}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
    className={`${styles.filter_wrapper}`}
  >
    {/* first column */}
<div>
<div className={`${styles.input_wrapper}`}>
           <span className={`${styles.label}`} >بحث في</span>
         <Form.Item name="search" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
        <Select
        >
          <Option value="إسم الدواء">إسم الدواء</Option>
          <Option value="الإسم الكيميائي">الإسم الكيميائي</Option>
          <Option value="التصنيف">التصنيف</Option>
        </Select>
      </Form.Item>
    </div>

<div className={`${styles.input_wrapper}`}>
           <span className={`${styles.label}`} >ترتيب ب</span>
         <Form.Item name="arrangement" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
        <Select
        >
          <Option value="إسم الدواء">إسم الدواء</Option>
          <Option value="الإسم الكيميائي">الإسم الكيميائي</Option>
          <Option value="التصنيف">التصنيف</Option>
        </Select>
      </Form.Item>
    </div>
        {/* first column */}


</div>
        {/* second column */}
        <div>
<div className={`${styles.input_wrapper}`}>
           <span className={`${styles.label}`} >تبدأ ب</span>
         <Form.Item name="valueSelection" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
        <Select
        >
          <Option value="20">20 EG</Option>
          <Option value="50">50 EG</Option>
          <Option value="100">100 EG</Option>
        </Select>
      </Form.Item>
    </div>

<div className={`${styles.input_wrapper}`}>
           <span className={`${styles.label}`} >ترتيب</span>
         <Form.Item name="arrangement_inc_dec" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
        <Select
        >
          <Option value="increment">تصاعدي</Option>
          <Option value="decrement">تنازلي</Option>
        </Select>
      </Form.Item>
    </div>


</div>
        {/* second column */}

        {/* third column */}
        <Form.Item
            name="value"
            rules={[{ required: true, message: 'هذا الحقل مطلوب' }]}
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >القيمة</span>
            <Input/>
            </div>
          </Form.Item>
        {/* third column */}
             {/* fourth column */}
             <div className={`${styles.row_wrapper}`} >

             <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary"className={`${styles.button_style}`} >
          <AiOutlineSearch/>
          <span className={styles.button_label}>بحث</span>  
        </Button>

      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary"className={`${styles.button_style}`} >
          <AiOutlineFilter/>
          <span className={styles.button_label}>ترتيب</span>  
        </Button>
      </Form.Item>
    </div>
        {/* fourth column */}
             {/* fifth column */}
        <div className={`${styles.row_wrapper}`} >
             <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button className={`${styles.button_style} ${styles.delete} `} >
          <TbLetterX/>
          <span className={styles.button_label}>الغاء الترتيب</span>  
        </Button>

      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button className={`${styles.button_style} ${styles.delete} `} >
          <TbLetterX/>
          <span className={styles.button_label}>الغاء الترتيب</span>  
        </Button>
      </Form.Item>
        </div>

        {/* fifth column */}


    </Form>
    <Pagination defaultCurrent={1} total={50} style={{transform:"translateX(-40%)"}} />
    </div>
  )
}

export default Filtration