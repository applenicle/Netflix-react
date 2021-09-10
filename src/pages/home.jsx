import React from 'react'
import { Feature, OptForm} from '../components'

import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import {JumbotronContainer} from '../containers/jumbotron';

export default function Home() {
  return ( 
  <>
        <HeaderContainer>
          <Feature>
          <Feature.Title>Unlimited films, Tv programmers adn more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at ant time</Feature.SubTitle>
          </Feature>
            <OptForm>
              <OptForm.Input placeholder="Email adress"/>
              <OptForm.Button>Try it now</OptForm.Button>
              <OptForm.Break/>
              <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
          </OptForm>
        </HeaderContainer>
          <JumbotronContainer/>
          <FaqsContainer/>
          <FooterContainer/>
        
   </>
   );
} 