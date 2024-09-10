import axios from 'axios';

// eslint-disable-next-line consistent-return
const fetchRoutesData = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/pages?populate=deep');
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
};

export const generateRoutes = async () => {
  const routes = [];
  const data = await fetchRoutesData();

  if (data && data.length > 0) {
    data.forEach((item) => {
      const path = `/${item.attributes.url}`;

      routes.push({
        path,
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: '',
            name: item.attributes.url,
            component: () => import('pages/IndexPage.vue'),
            props: { data: item },
          },
        ],
      });
    });
  }

  return routes;
};
