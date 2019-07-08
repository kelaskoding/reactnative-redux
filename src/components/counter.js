import React, { Component } from 'react';
import { Text, Container, Header, Body, Title, Content, Card, CardItem, Button } from 'native-base';
import { bindActionCreators } from 'redux';
import { increament, decreament } from '../actions/actionCounter'
import { connect } from 'react-redux';


class Counter extends Component{
    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Redux Counter</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Text>{this.props.count}</Text>
                        </CardItem>
                    </Card>
                    <Button full success style={{marginTop:5}}
                        onPress={()=> this.props.handleIncreament() }>
                        <Text>Increament</Text>
                    </Button>
                    <Button full danger style={{marginTop:5}}
                        onPress={()=> this.props.handleDecreament() }>
                        <Text>Decreament</Text>
                    </Button>  
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state){
    return{
        count: state.count
    }
} 

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        handleIncreament: increament,
        handleDecreament: decreament
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (Counter);