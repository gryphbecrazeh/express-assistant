const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./views/*.{html,js,ejs}", "./src/*.{html,js,jsx,ts,tsx,vue,css}", "./src/**/*.{html,js,jsx,ts,tsx,vue,css}", "./public/*.{html,js,jsx,ts,tsx,vue,css}", "./dist/*.{html,css,js}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      'transparent': 'transparent',

      'black': '#22292f',

      'smoke': {
        100: 'rgba(0,0,0,0.1)',
        200: 'rgba(0,0,0,0.2)',
        300: 'rgba(0,0,0,0.3)',
        400: 'rgba(0,0,0,0.4)',
        500: 'rgba(0,0,0,0.5)',
        600: 'rgba(0,0,0,0.6)',
        700: 'rgba(0,0,0,0.7)',
        800: 'rgba(0,0,0,0.8)',
        900: 'rgba(0,0,0,0.9)',
      },

      'white': '#ffffff',

      'fog': {
        100: 'rgba(255,255,255,0.1)',
        200: 'rgba(255,255,255,0.2)',
        300: 'rgba(255,255,255,0.3)',
        400: 'rgba(255,255,255,0.4)',
        500: 'rgba(255,255,255,0.5)',
        600: 'rgba(255,255,255,0.6)',
        700: 'rgba(255,255,255,0.7)',
        800: 'rgba(255,255,255,0.8)',
        900: 'rgba(255,255,255,0.9)',
      },

      'red': {
        100: '#FFEAEA',
        200: '#FAD3D3',
        300: '#FAB4B4',
        400: '#FA9898',
        500: '#FA7A7A',
        600: '#F96868',
        700: '#E9595B',
        800: '#D6494B',
      },

      'pink': {
        100: '#FCE4EC',
        200: '#FFCCDE',
        300: '#FBA9C6',
        400: '#FB8DB4',
        500: '#F978A6',
        600: '#F96197',
        700: '#F44C87',
        800: '#E53B75',
      },

      'purple': {
        100: '#F6F2FF',
        200: '#E3DBF4',
        300: '#D2C5EC',
        400: '#BBA7E4',
        500: '#A58ADD',
        600: '#926DDE',
        700: '#7C51D1',
        800: '#6D45BC',
      },

      'indigo': {
        100: '#EDEFF9',
        200: '#DADEF5',
        300: '#BCC5F4',
        400: '#9DAAF3',
        500: '#8897EC',
        600: '#677AE4',
        700: '#5166D6',
        800: '#465BD4',
      },

      'blue': {
        100: '#E8F1F8',
        200: '#D5E4F1',
        300: '#BCD8F1',
        400: '#A2CAEE',
        500: '#89BCEB',
        600: '#62A8EA',
        700: '#4E97D9',
        800: '#3583CA',
      },

      'cyan': {
        100: '#ECF9FA',
        200: '#D3EFF2',
        300: '#BAEAEF',
        400: '#9AE1E9',
        500: '#77D6E1',
        600: '#57C7D4',
        700: '#47B8C6',
        800: '#37A9B7',
      },

      'teal': {
        100: '#ECFDFC',
        200: '#CDF4F1',
        300: '#99E1DA',
        400: '#79D1C9',
        500: '#56BFB5',
        600: '#3AA99E',
        700: '#269B8F',
        800: '#178D81',
      },

      'green': {
        100: '#E7FAF2',
        200: '#BFEDD8',
        300: '#9FE5C5',
        400: '#7DD3AE',
        500: '#5CD29D',
        600: '#46BE8A',
        700: '#36AB7A',
        800: '#279566',
      },

      'light-green': {
        100: '#F1F7EA',
        200: '#E0ECD1',
        300: '#CADFB1',
        400: '#BAD896',
        500: '#ACD57C',
        600: '#9ECE67',
        700: '#83B944',
        800: '#70A532',
      },

      'yellow': {
        100: '#FFFAE7',
        200: '#F9EEC1',
        300: '#F6E7A9',
        400: '#F8E59B',
        500: '#F7E083',
        600: '#F7DA64',
        700: '#F9CD48',
        800: '#FBC02D',
      },

      'orange': {
        100: '#FFF3E6',
        200: '#FFDDB9',
        300: '#FBCE9D',
        400: '#F6BE80',
        500: '#F4B066',
        600: '#F2A654',
        700: '#EC9940',
        800: '#E98F2E',
      },

      'brown': {
        100: '#FAE6DF',
        200: '#E2BDAF',
        300: '#D3AA9C',
        400: '#B98E7E',
        500: '#A17768',
        600: '#8D6658',
        700: '#7D5B4F',
        800: '#715146',
      },

      'gray': {
        100: '#FAFAFA',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
      },

      'blue-gray': {
        100: '#F3F7F9',
        200: '#E4EAEC',
        300: '#CCD5DB',
        400: '#A3AFB7',
        500: '#76838F',
        600: '#526069',
        700: '#37474F',
        800: '#263238',
      },
    },
    filter: {
      'grayscale': 'grayscale(1)',
      'none': 'none',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(5px)',
    },
    extend: {
      borderRadius: {
        'sm': '0.2rem',
        'default': '0.4rem',
        'md': '0.6rem',
        'lg': '0.8rem',
      },
      boxShadow: {
        outline: '0px 0px 0px 3px rgba(188,197,244,0.45)',
        'outline-indigo': '0px 0px 0px 3px rgba(188,197,244,0.45)',
        'outline-green': '0px 0px 0px 3px rgba(159,229,197,0.45)',
      },
      screens: {
        'print': { 'raw': 'print' },
      },
      width: {
        // 64: '16rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        128: '32rem',
        '1/1': '100%',
      },
      maxHeight: (theme) => ({
        full: '100%',
        screen: '100vh',
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        '0': '0',
        full: '100%',
        screen: '100vh',
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        '0': '0',
        full: '100%',
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      height: {
        14: '3.5rem',
        96: '24rem',
      },
      inset: {
        '16': '4rem',
      }
    },
    typography: {
      default: {
        css: {
          maxWidth: 'none',
        },
      },
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'focus-within', 'focus', 'group-hover', 'hover', 'active', 'disabled', 'checked', 'toggle-box'],
    borderColor: ['responsive', 'hover', 'focus-within', 'focus', 'checked'],
    boxShadow: ['responsive', 'hover', 'focus-within', 'focus'],
    display: ['responsive', 'group-focus', 'focus-within'],
    textColor: ['responsive', 'focus-within', 'focus', 'group-hover', 'hover', 'active', 'disabled'],
    cursor: ['responsive', 'disabled'],
    opacity: ['responsive', 'focus', 'group-hover', 'hover', 'disabled'],
    outline: ['responsive', 'focus-within', 'focus'],
    filter: ['focus-within'],
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('target', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`target${separator}${className}`)}:target`
        })
      });
    }),
    plugin(({ addVariant, e }) => {
      addVariant('toggle-box', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => {
            const eClassName = e(`toggle-box${separator}${className}`); // escape class
            const yourSelector = 'input[type="checkbox"]'; // your input selector. Could be any
            return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
          }
        )
      })
    }),
  ]
};
