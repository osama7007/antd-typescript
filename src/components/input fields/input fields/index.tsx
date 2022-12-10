import styles from "./inputField.module.css";
import { Button,Form, Input ,Select  } from 'antd';
import { AiOutlineSave } from 'react-icons/ai';
import { addDrug } from "../../../redux/drugSlice";
import { useAppSelector , useAppDispatch } from "../../../redux/hooks";
const InputField:React.FC = () => {
  const drugValues = useAppSelector((state) => state.drugs.drugValues)
  const dispatch = useAppDispatch()
    const { Option } = Select;
  
    const onFinish = (values: any) => {
        dispatch(addDrug(values));
        console.log(drugValues)
      };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span:25}}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      className={`${styles.form_wrapper}`}
    >
          {/* first column */}

   <div>
          <Form.Item
            name="drugName"
            rules={[{ required: true, message: 'هذا الحقل مطلوب' }]}
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >إسم الدواء</span>
            <Input/>
            </div>
          </Form.Item>

          <Form.Item
            name="arabicName"
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >الإسم العربي</span>
            <Input/>
            </div>
          </Form.Item>

          <Form.Item
            name="QRCode"
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >QR Code</span>
            <Input/>
            </div>
          </Form.Item>

      <div className={`${styles.input_wrapper}`}>
           <span className={`${styles.label}`} >الشكل الدوائي</span>
         <Form.Item name="drugShape" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
        <Select
        >
          <Option value="أقراص">أقراص</Option>
          <Option value="شراب">شراب</Option>
          <Option value="محاليل">محاليل</Option>
          <Option value="أخرى">أخرى</Option>
        </Select>
      </Form.Item>
    </div>
    {/* first column */}

    </div>
    {/* second column */}
   <div>

      <div className={`${styles.input_wrapper}`}>
              <span className={`${styles.label}`} >نوع الوحده</span>
            <Form.Item name="type" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
            <Select              
            >
              <Option value="النوع الأول">النوع الأول</Option>
              <Option value="النوع الثاني">النوع الثاني</Option>
              <Option value="النوع الثالث ">النوع الثالث</Option>
              <Option value="أخرى">أخرى</Option>
            </Select>
          </Form.Item>
        </div>

          <Form.Item
            name="chemicalName"
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >الإسم الكيميائي</span>
            <Input/>
            </div>
          </Form.Item>

          <div className={`${styles.input_wrapper}`}>
              <span className={`${styles.label}`} >الشركة</span>
            <Form.Item name="company" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
            <Select              
            >
              <Option value="الشركة الأولى">الشركة الأولى</Option>
              <Option value="الشركة الثانية">الشركة الثانية</Option>
              <Option value="الشركة الثالثة ">الشركة الثالثة</Option>
              <Option value="أخرى">أخرى</Option>
            </Select>
          </Form.Item>
        </div>

          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
        <Button type="primary" htmlType="submit">
          <AiOutlineSave/>
          <span className={styles.save}>حفظ</span>  
        </Button>
      </Form.Item>
          
    </div>
   <div>
    {/* second column */}
          {/* third column */}
   <Form.Item
            name="amount"
            rules={[{ required: true, message: 'هذا الحقل مطلوب' }]}
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >عدد الوحدات</span>
            <Input/>
            </div>
          </Form.Item>
          
          <Form.Item
            name="barcode"
            rules={[{ required: true, message: 'هذا الحقل مطلوب' }]}
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >الباركود المحلي </span>
            <Input/>
            </div>
          </Form.Item>
          
          <div className={`${styles.input_wrapper}`}>
              <span className={`${styles.label}`} >القسم</span>
            <Form.Item name="department" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
            <Select              
            >
              <Option value="القسم الأول">القسم الأول</Option>
              <Option value="القسم الثاني">القسم الثاني</Option>
              <Option value="القسم الثالث ">القسم الثالث</Option>
              <Option value="أخرى">أخرى</Option>
            </Select>
          </Form.Item>
        </div>

          
    </div>
    {/* third column */}
    {/* fourth column */}
    <div>
          
    <Form.Item
            name="latinName"
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >الإسم اللاتيني</span>
            <Input/>
            </div>
          </Form.Item>
          
          <Form.Item
            name="golabalBarcode"
          >
            <div className={`${styles.input_wrapper}`}>
            <span className={`${styles.label}`} >الباركود الدولي</span>
            <Input/>
            </div>
          </Form.Item>

          <div className={`${styles.input_wrapper}`}>
              <span className={`${styles.label}`} >التصنيف</span>
            <Form.Item name="classification" rules={[{ required: true }]} style={{width:"100%" , borderRadius:"none"}}>
            <Select              
            >
              <Option value="التصنيف الأول">التصنيف الأول</Option>
              <Option value="التصنيف الثاني">التصنيف الثاني</Option>
              <Option value="التصنيف الثالث ">التصنيف الثالث</Option>
              <Option value="أخرى">أخرى</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
    </Form>
  )
}

export default InputField