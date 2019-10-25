import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/header';
import Tabs from '~/components/tabs';



import { Container,
         Content,
         Card,
         CardHeader,
         CardFooter,
         CardContent,
         Title,
         Annotation,
         Description        
} from './styles';



export default function Main() {
  return (
    <Container>
      <Header />
        <Content>
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponivel</Title>
              <Description>R$ 100.000,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência concluída
              </Annotation>
            </CardFooter>
          </Card>
        </Content>
      <Tabs />
    </Container>
  );
}
