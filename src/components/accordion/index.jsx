import React from 'react';
import { 
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body
} from './styles/accordion';

const ToogleContext = React.createContext();
export default function Accordion ({ children, ...restProps}) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Accordion.Title = function AccordionTitle ({ children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
};

Accordion.Item = function AccordionItem ({ children, ...restProps}) {
  const [toggleShow, setToggleShow] = React.useState(false)
  return <ToogleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
          </ToogleContext.Provider>
};
Accordion.Header = function AccordionHeader ({ children, ...restProps}) {
  const {toggleShow, setToggleShow} = React.useContext(ToogleContext)
  return <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
    {children}
    {/* <pre>{JSON.stringify(toggleShow, null, 2)}</pre> */}
    {toggleShow ? (
      <img src="/images/icons/close-slim.png" alt="Close" />
    ) : (
      <img src="/images/icons/add.png" alt="Open" />
    )}
    </Header>
};
Accordion.Body = function AccordionBody ({ children, ...restProps}) {
  const {toggleShow} = React.useContext(ToogleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body>: null;
};