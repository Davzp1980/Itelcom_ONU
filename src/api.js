import axios from 'axios';

axios.defaults.baseURL = 'http://test.itelkom.net/ajax';

export async function RegistrationONU(input) {
  try {
    const res = await axios.post(
      '/reg_onu.php',
      {
        loginu: input.login,
        vlan: input.vlan,
        ip_olt: input.ip_olt,
        port: input.port,
        speed: input.speed,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFromBilling(input) {
  const res = await axios.post(
    '/info.php',
    {
      loginu: input,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return res.data;
}

export async function RegistrationOnuSwitch(input) {
  try {
    const res = await axios.post(
      '/reg_onu_sw.php',
      {
        loginu: input.address,
        vlan: input.vlan,
        ip_olt: input.ip_olt,
        port: input.port,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function UnregisterOnu(input) {
  try {
    const res = await axios.post(
      '/dereg_onu.php',
      {
        ip_olt: input.ip_olt,
        port: input.port,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
