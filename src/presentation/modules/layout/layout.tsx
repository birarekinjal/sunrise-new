import { Visibility } from '@material-ui/icons';
import { useState } from 'react';
import Send from '@mui/icons-material/Send';
import {
  Button,
  Checkbox,
  CheckboxDropdown,
  Input,
  Modal,
  Loader,
  Tabs,
  Stepper,
  DatePicker,
  TimePicker,
  DateTimePicker,
  Switch,
} from '../../../infrastructure/components';
import Grid from '@mui/material/Grid';
import { offerLabel } from '../../../application/constants/svgConstants';
import { options } from '../../../application/constants/constant';
import AddForm from './addForm';
import WithContainerLayout from '../../layout/withContainer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Layout() {
  const [selectOption, setSelectOption] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [dateTime, setDateTime] = useState();

  const handleChange = (selected: any) => {
    setSelectOption(selected);
  };

  const modalFooterButtons = [
    {
      label: 'Cancel',
      color: 'primary',
      variant: 'outlined',
      className: 'customFilledBtn',
      // onClick: handleClick,
    },
    {
      label: 'Save',
      color: 'primary',
      className: 'customFilledBtn',
      variant: 'contained',
      // onClick: () => handleClick(),
    },
  ];

  function HandleToast() {
    return (
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    );
  }
  function Botree() {
    return (
      <>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </>
    );
  }

  const TabsConstant = [
    {
      value: '1',
      label: 'React js',
      disabled: false,
      component: <HandleToast />,
      // icon: <DeleteIcon />,
      iconPosition: 'start',
    },
    {
      value: '2',
      label: 'Botree',
      // icon: <DeleteIcon />,
      iconPosition: 'end',
      component: <Botree />,
    },
    {
      value: '3',
      label: 'Java',
      disabled: true,
      component: <HandleToast />,
    },
    {
      value: '4',
      label: 'Dajngo',
      component: <Botree />,
    },
  ];

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(!open);
  };

  const getStepContents = (step: any) => {
    switch (step) {
      case 0:
        return <Botree />;
      case 1:
        return 'do step 2';
      case 2:
        return 'do step 3';
      default:
        return 'unknown step';
    }
  };

  const steps = [
    'Basic information',
    'Contact Information',
    'Personal Information',
    'Payment',
  ];

  const handleSwitch = (e: any) => {
    alert(e.target.checked);
  };

  return (
    <WithContainerLayout>
      <section className='main-container layout-page'>
        <h1>Common Components</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardContent className='btn-compo'>
                <h2 className='sub-head mt-0'>Button Component </h2>
                <div>
                  <h4 className="sub-head-2">Using Color</h4>
                  <Button
                    label="inherit"
                    color="inherit"
                    onClick={() => alert('inherit')}
                  />
                  <Button
                    label="primary"
                    color="primary"
                    onClick={() => alert('primary')}
                  />
                  <Button
                    label="secondary"
                    color="secondary"
                    onClick={() => alert('secondary')}
                  />
                  <Button
                    label="success"
                    color="success"
                    onClick={() => alert('success')}
                  />
                  <Button label="error" color="error" onClick={() => alert('error')} />
                  <Button label="info" color="info" onClick={() => alert('info')} />
                  <Button
                    label="warning"
                    color="warning"
                    onClick={() => alert('warning')}
                  />
                  <br />
                  <h4 className="sub-head-2">Variant outlined</h4>
                  <Button
                    label="inherit"
                    color="inherit"
                    variant="outlined"
                    onClick={() => alert('inherit')}
                  />
                  <Button
                    label="primary"
                    color="primary"
                    variant="outlined"
                    onClick={() => alert('primary')}
                  />
                  <Button
                    label="secondary"
                    color="secondary"
                    variant="outlined"
                    onClick={() => alert('secondary')}
                  />
                  <Button
                    label="success"
                    color="success"
                    variant="outlined"
                    onClick={() => alert('success')}
                  />
                  <Button
                    label="error"
                    color="error"
                    variant="outlined"
                    onClick={() => alert('error')}
                  />
                  <Button
                    label="info"
                    color="info"
                    variant="outlined"
                    onClick={() => alert('info')}
                  />
                  <Button
                    label="warning"
                    color="warning"
                    variant="outlined"
                    onClick={() => alert('warning')}
                  />
                  <br />

                  <h4 className="sub-head-2">Append Icons</h4>
                  <Button
                    label="inherit"
                    color="inherit"
                    variant="text"
                    onClick={() => alert('inherit')}
                  />
                  <Button
                    label="primary"
                    color="primary"
                    variant="text"
                    onClick={() => alert('primary')}
                  />
                  <Button
                    label="secondary"
                    color="secondary"
                    variant="text"
                    onClick={() => alert('secondary')}
                  />
                  <Button
                    label="success"
                    color="success"
                    variant="text"
                    onClick={() => alert('success')}
                  />
                  <Button
                    label="error"
                    color="error"
                    variant="text"
                    onClick={() => alert('error')}
                  />
                  <Button
                    label="info"
                    color="info"
                    variant="text"
                    onClick={() => alert('info')}
                  />
                  <Button
                    label="warning"
                    color="warning"
                    variant="text"
                    onClick={() => alert('warning')}
                  />
                  <br />

                  <h4 className="sub-head-2">Prepend Icon</h4>
                  <Button
                    label="inherit"
                    color="inherit"
                    // startIcon={<Visibility/>}
                    withStartSvg={offerLabel}
                    withEndSvg={offerLabel}
                    onClick={() => alert('inherit')}
                  />
                  <Button
                    label="primary"
                    color="primary"
                    startIcon={<Visibility />}
                    onClick={() => alert('primary')}
                  />
                  <Button
                    label="secondary"
                    color="secondary"
                    startIcon={<Visibility />}
                    onClick={() => alert('secondary')}
                  />
                  <Button
                    label="success"
                    color="success"
                    startIcon={<Visibility />}
                    onClick={() => alert('success')}
                  />
                  <Button
                    label="error"
                    color="error"
                    startIcon={<Visibility />}
                    onClick={() => alert('error')}
                  />
                  <Button
                    label="info"
                    color="info"
                    startIcon={<Visibility />}
                    onClick={() => alert('info')}
                  />
                  <Button
                    label="warning"
                    color="warning"
                    startIcon={<Visibility />}
                    onClick={() => alert('warning')}
                  />
                  <br />

                  <h4 className="sub-head-2">Append Icon</h4>
                  <Button
                    label="inherit"
                    color="inherit"
                    endIcon={<Send />}
                    onClick={() => alert('inherit')}
                  />
                  <Button
                    label="primary"
                    color="primary"
                    endIcon={<Send />}
                    onClick={() => alert('primary')}
                  />
                  <Button
                    label="secondary"
                    color="secondary"
                    endIcon={<Send />}
                    onClick={() => alert('secondary')}
                  />
                  <Button
                    label="success"
                    color="success"
                    endIcon={<Send />}
                    onClick={() => alert('success')}
                  />
                  <Button
                    label="error"
                    color="error"
                    endIcon={<Send />}
                    onClick={() => alert('error')}
                  />
                  <Button
                    label="info"
                    color="info"
                    endIcon={<Send />}
                    onClick={() => alert('info')}
                  />
                  <Button
                    label="warning"
                    color="warning"
                    endIcon={<Send />}
                    onClick={() => alert('warning')}
                  />
                  <br />

                  <h4 className="sub-head-2">With Loader</h4>
                  <Button
                    label="inherit"
                    color="inherit"
                    isLoading
                    onClick={() => alert('inherit')}
                  />
                  <Button
                    label="primary"
                    color="primary"
                    isLoading
                    onClick={() => alert('primary')}
                  />
                  <Button
                    label="secondary"
                    color="secondary"
                    isLoading
                    onClick={() => alert('secondary')}
                  />
                  <Button
                    label="success"
                    color="success"
                    isLoading
                    onClick={() => alert('Test')}
                  />
                  <Button
                    label="info"
                    color="info"
                    isLoading
                    onClick={() => alert('info')}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <h2 className='sub-head mt-0'>Calender Picker</h2>
                    <div>
                      <h4 className='sub-head-2'>DateTimePicker</h4>
                      <DateTimePicker
                        value={dateTime}
                        onChange={(e: any) => setDateTime(e)}
                      />
                    </div>

                    <div>
                      <h4 className='sub-head-2'>TimePicker</h4>
                      <TimePicker
                        value={time}
                        onChange={(e: any) => setTime(e)}
                      />
                    </div>
                    <div>
                      <h4 className='sub-head-2'>DatePicker</h4>
                      <DatePicker
                        value={date}
                        onChange={(e: any) => setDate(e)}
                      />
                    </div>

                  </Grid>
                  <Grid item xs={6} md={6}>
                    <h2 className='sub-head mt-0'>Input View</h2>
                    <div>
                      <h4 className='sub-head-2'>Input with type and required props</h4>
                      <Input type="text" required placeholder="Enter Text.." label="Enter Text" name="text" />
                    </div>

                    <div>
                      <h4 className='sub-head-2'>Input with multiline props</h4>
                      <Input type="text" maxRows="10" multiLine color="primary" placeholder="Enter Text.." label="Enter Text" name="text" />
                    </div>

                    <div>
                      <h4 className='sub-head-2'>Select dropdown</h4>
                      <Input type="text" maxRows="10" multiLine color="primary" placeholder="Enter Text.." label="Enter Text" name="text" />
                    </div>

                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className='sub-head mt-0'>Tabs</h2>
                <Tabs data={TabsConstant} />
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <h2 className='sub-head mt-0'>Modal</h2>
                    {
                      open && (
                        <Modal
                          buttons={modalFooterButtons}
                          title="Heading Title"
                          isModalVisible={open}
                          toggleModal={handleModalClose}
                        >
                          <div>Modal with Footer Button</div>
                        </Modal>
                      )
                    }
                    <Button type="button" label="Open" onClick={() => handleModalOpen()} />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <h2 className='sub-head mt-0'>Switch</h2>
                    <Switch color="secondary" onChange={(e: any) => handleSwitch(e)} />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <h2 className='sub-head mt-0'>Loader</h2>
                    <Loader color="secondary" />
                    {/* <Loader color='primary' thickness={1.5}/>
                  <Loader color='secondary' thickness={15} /> */}
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <h2 className='sub-head mt-0'>Check</h2>
                    <Checkbox color="default" label="default" checked


                    // size="small"

                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent className='btn-compo'>
                <h2 className='sub-head mt-0'>Stepper Form</h2>
                <Stepper
                  getStepContent={getStepContents}
                  steps={steps}
                  activeStep={1}
                  optionalPageNumber={2}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <AddForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <br />
        <CheckboxDropdown
          options={options}
          onChange={handleChange}
          allowSelectAll
          value={selectOption}
        />
      </section>
    </WithContainerLayout >
  );
}

export default Layout;
