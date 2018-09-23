import React, { Component, Fragment } from 'react'
import { 
  Grid,
  Item,
  GridColumn,
} from 'semantic-ui-react'

// const {photo, name, location } = this.props.friend 


const Friend = ({friend: {photo, name, location, age, gender, quote}}) => (
  <Grid>
    <GridColumn width={3}></GridColumn>
    <GridColumn width={10}>
      <Item.Group>
        <Item>
          <Item.Image img src={photo}/>
            <Item.Content>
            <Item.Header as='h2'>{name}</Item.Header>
              <Item.Meta as='h3'>{location}</Item.Meta>
              <Item.Meta as='h4'>{age}, {gender}</Item.Meta>
              <Item.Meta>{quote}</Item.Meta>
            </Item.Content>
          </Item>
      </Item.Group>
    </GridColumn>
    <GridColumn width={3}></GridColumn>
  </Grid>
)

export default Friend