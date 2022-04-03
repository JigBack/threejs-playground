import { ThemeType } from 'grommet';

export const theme: ThemeType = {
  'global': {
    'colors': {
      'brand': {
        'dark': '#6BA368',
        'light': '#6BA368'
      },
      'secondary': {
        'dark': '#9CFC97',
        'light': '#9CFC97'
      },
      'background': {
        'dark': '#E6FAFC',
        'light': '#E6FAFC'
      },
      'control': 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning',
      'focus': {
        'light': '#FF1053',
        'dark': '#FF1053'
      }
    },
    'font': {
      'family': 'Helvetica',
      'size': '21px',
      'height': '28px',
      'maxWidth': '588px'
    },
    'active': {
      'background': 'active-background',
      'color': 'active-text'
    },
    'hover': {
      'background': 'active-background',
      'color': 'active-text'
    },
    'selected': {
      'background': 'selected-background',
      'color': 'selected-text'
    },
    'control': {
      'border': {
        'radius': '6px'
      }
    },
    'drop': {
      'border': {
        'radius': '6px'
      }
    },
    'borderSize': {
      'xsmall': '1px',
      'small': '2px',
      'medium': '5px',
      'large': '14px',
      'xlarge': '28px'
    },
    'breakpoints': {
      'small': {
        'value': 896,
        'borderSize': {
          'xsmall': '1px',
          'small': '2px',
          'medium': '5px',
          'large': '7px',
          'xlarge': '14px'
        },
        'edgeSize': {
          'none': '0px',
          'hair': '1px',
          'xxsmall': '2px',
          'xsmall': '4px',
          'small': '7px',
          'medium': '14px',
          'large': '28px',
          'xlarge': '56px'
        },
        'size': {
          'xxsmall': '28px',
          'xsmall': '56px',
          'small': '112px',
          'medium': '224px',
          'large': '448px',
          'xlarge': '896px',
          'full': '100%'
        }
      },
      'medium': {
        'value': 1792
      },
      'large': {}
    },
    'edgeSize': {
      'none': '0px',
      'hair': '1px',
      'xxsmall': '4px',
      'xsmall': '7px',
      'small': '14px',
      'medium': '28px',
      'large': '56px',
      'xlarge': '112px',
      'responsiveBreakpoint': 'small'
    },
    'input': {
      'padding': '14px',
      'weight': 600
    },
    'spacing': '28px',
    'size': {
      'xxsmall': '56px',
      'xsmall': '112px',
      'small': '224px',
      'medium': '448px',
      'large': '896px',
      'xlarge': '1344px',
      'xxlarge': '1792px',
      'full': '100%'
    }
  },
  'chart': {},
  'diagram': {
    'line': {}
  },
  'meter': {},
  'tip': {
    'content': {
      'background': {
        'color': 'background'
      },
      'elevation': 'none',
      'round': false
    }
  },
  'button': {
    'border': {
      'width': '2px',
      'radius': '21px'
    },
    'padding': {
      'vertical': '5px',
      'horizontal': '26px'
    }
  },
  'checkBox': {
    'check': {
      'radius': '6px'
    },
    'toggle': {
      'radius': '28px',
      'size': '56px'
    },
    'size': '28px'
  },
  'radioButton': {
    'size': '28px'
  },
  'formField': {
    'border': {
      'color': 'border',
      'error': {
        'color': {
          'dark': 'white',
          'light': 'status-critical'
        }
      },
      'position': 'inner',
      'side': 'bottom'
    },
    'content': {
      'pad': 'small'
    },
    'disabled': {
      'background': {
        'color': 'status-disabled',
        'opacity': 'medium'
      }
    },
    'error': {
      'color': 'status-critical',
      'margin': {
        'vertical': 'xsmall',
        'horizontal': 'small'
      }
    },
    'help': {
      'color': 'dark-3',
      'margin': {
        'start': 'small'
      }
    },
    'info': {
      'color': 'text-xweak',
      'margin': {
        'vertical': 'xsmall',
        'horizontal': 'small'
      }
    },
    'label': {
      'margin': {
        'vertical': 'xsmall',
        'horizontal': 'small'
      }
    },
    'margin': {
      'bottom': 'small'
    },
    'round': '6px'
  },
  'calendar': {
    'small': {
      'fontSize': '14px',
      'lineHeight': 1.375,
      'daySize': '32.00px'
    },
    'medium': {
      'fontSize': '21px',
      'lineHeight': 1.45,
      'daySize': '64.00px'
    },
    'large': {
      'fontSize': '42px',
      'lineHeight': 1.11,
      'daySize': '128.00px'
    }
  },
  'clock': {
    'analog': {
      'hour': {
        'width': '9px',
        'size': '28px'
      },
      'minute': {
        'width': '5px',
        'size': '14px'
      },
      'second': {
        'width': '4px',
        'size': '11px'
      },
      'size': {
        'small': '84px',
        'medium': '112px',
        'large': '168px',
        'xlarge': '252px',
        'huge': '336px'
      }
    },
    'digital': {
      'text': {
        'xsmall': {
          'size': '7px',
          'height': 1.5
        },
        'small': {
          'size': '14px',
          'height': 1.43
        },
        'medium': {
          'size': '21px',
          'height': 1.375
        },
        'large': {
          'size': '28px',
          'height': 1.167
        },
        'xlarge': {
          'size': '35px',
          'height': 1.1875
        },
        'xxlarge': {
          'size': '49px',
          'height': 1.125
        }
      }
    }
  },
  'heading': {
    'level': {
      '1': {
        'small': {
          'size': '49px',
          'height': '56px',
          'maxWidth': '1372px'
        },
        'medium': {
          'size': '77px',
          'height': '84px',
          'maxWidth': '2156px'
        },
        'large': {
          'size': '133px',
          'height': '140px',
          'maxWidth': '3724px'
        },
        'xlarge': {
          'size': '189px',
          'height': '196px',
          'maxWidth': '5292px'
        }
      },
      '2': {
        'small': {
          'size': '42px',
          'height': '49px',
          'maxWidth': '1176px'
        },
        'medium': {
          'size': '63px',
          'height': '70px',
          'maxWidth': '1764px'
        },
        'large': {
          'size': '84px',
          'height': '91px',
          'maxWidth': '2352px'
        },
        'xlarge': {
          'size': '105px',
          'height': '112px',
          'maxWidth': '2940px'
        }
      },
      '3': {
        'small': {
          'size': '35px',
          'height': '42px',
          'maxWidth': '980px'
        },
        'medium': {
          'size': '49px',
          'height': '56px',
          'maxWidth': '1372px'
        },
        'large': {
          'size': '63px',
          'height': '70px',
          'maxWidth': '1764px'
        },
        'xlarge': {
          'size': '77px',
          'height': '84px',
          'maxWidth': '2156px'
        }
      },
      '4': {
        'small': {
          'size': '28px',
          'height': '35px',
          'maxWidth': '784px'
        },
        'medium': {
          'size': '35px',
          'height': '42px',
          'maxWidth': '980px'
        },
        'large': {
          'size': '42px',
          'height': '49px',
          'maxWidth': '1176px'
        },
        'xlarge': {
          'size': '49px',
          'height': '56px',
          'maxWidth': '1372px'
        }
      },
      '5': {
        'small': {
          'size': '18px',
          'height': '25px',
          'maxWidth': '490px'
        },
        'medium': {
          'size': '18px',
          'height': '25px',
          'maxWidth': '490px'
        },
        'large': {
          'size': '18px',
          'height': '25px',
          'maxWidth': '490px'
        },
        'xlarge': {
          'size': '18px',
          'height': '25px',
          'maxWidth': '490px'
        }
      },
      '6': {
        'small': {
          'size': '14px',
          'height': '21px',
          'maxWidth': '392px'
        },
        'medium': {
          'size': '14px',
          'height': '21px',
          'maxWidth': '392px'
        },
        'large': {
          'size': '14px',
          'height': '21px',
          'maxWidth': '392px'
        },
        'xlarge': {
          'size': '14px',
          'height': '21px',
          'maxWidth': '392px'
        }
      }
    }
  },
  'paragraph': {
    'small': {
      'size': '18px',
      'height': '25px',
      'maxWidth': '490px'
    },
    'medium': {
      'size': '21px',
      'height': '28px',
      'maxWidth': '588px'
    },
    'large': {
      'size': '28px',
      'height': '35px',
      'maxWidth': '784px'
    },
    'xlarge': {
      'size': '35px',
      'height': '42px',
      'maxWidth': '980px'
    },
    'xxlarge': {
      'size': '49px',
      'height': '56px',
      'maxWidth': '1372px'
    }
  },
  'text': {
    'xsmall': {
      'size': '14px',
      'height': '21px',
      'maxWidth': '392px'
    },
    'small': {
      'size': '18px',
      'height': '25px',
      'maxWidth': '490px'
    },
    'medium': {
      'size': '21px',
      'height': '28px',
      'maxWidth': '588px'
    },
    'large': {
      'size': '28px',
      'height': '35px',
      'maxWidth': '784px'
    },
    'xlarge': {
      'size': '35px',
      'height': '42px',
      'maxWidth': '980px'
    },
    'xxlarge': {
      'size': '49px',
      'height': '56px',
      'maxWidth': '1372px'
    }
  },
  'layer': {
    'background': {
      'dark': '#111111',
      'light': '#FFFFFF'
    }
  }
}