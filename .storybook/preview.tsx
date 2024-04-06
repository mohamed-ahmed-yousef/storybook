import React from "react";
import type { Preview } from "@storybook/react";
import { ChakraProvider, theme as chakraTheme, extendBaseTheme} from '@chakra-ui/react';
import { withConsole } from '@storybook/addon-console';


const { Button } = chakraTheme.components
const theme = extendBaseTheme({
  components: {
    Button,
  },
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
    (storyFn, context) => withConsole()(storyFn)(context)
],

};

export default preview;
