import palette from 'theme/palette';

export const data = {
  labels: ['Israel', 'United States', 'United Kingdom', 'Africa', 'Canada'],
  datasets: [
    {
      label: 'Reviews',
      backgroundColor: [
        palette.primary.main,
        palette.secondary.main,
        palette.secondary.main,
        palette.secondary.main,
        palette.primary.light,
      ],
      data: [18, 5, 19, 27, 29]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: palette.divider,
    backgroundColor: palette.white,
    titleFontColor: palette.text.primary,
    bodyFontColor: palette.text.secondary,
    footerFontColor: palette.text.secondary
  },
  layout: { padding: 0 },
};
