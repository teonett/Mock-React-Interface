import React, { useState } from 'react'
import { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import * as Icon from 'react-bootstrap-icons';
import data from '../../assets/data/data.json'
import './style.css'

class ListItens extends Component{
  constructor(props){
    super(props);
    this.list = []
    const self = this;
    this.state = {};
    this.handleChange = this.handleChange.bind(this);

    let arrLevel1 = []
    let arrLevel2 = []
    let arrLevel3 = []
    let arrLevel4 = []
    for(var i in data){

      for(var j in data[i].children){
        
        for(var k in data[i].children[j].children){
          
          for(var l in data[i].children[j].children[k].children){
            
            for(var m in data[i].children[j].children[k].children[l].children){
              
              arrLevel4.push({
                "id" : data[i].children[j].children[k].children[l].children[m].id,
                "name": data[i].children[j].children[k].children[l].children[m].name,
                "level": data[i].children[j].children[k].children[l].children[m].level,
                "open": false,
                "children": data[i].children[j].children[k].children[l].children[m].children
              });

            }

            arrLevel3.push({
              "id" : data[i].children[j].children[k].children[l].id,
              "name": data[i].children[j].children[k].children[l].name,
              "level": data[i].children[j].children[k].children[l].level,
              "open": false,
              "children": arrLevel4
            });
            arrLevel4 = []

          }
          arrLevel2.push({
            "id" : data[i].children[j].children[k].id,
            "name": data[i].children[j].children[k].name,
            "level": data[i].children[j].children[k].level,
            "open": false,
            "children": arrLevel3
          });
          arrLevel3 = []
        }
        arrLevel1.push({
          "id" : data[i].children[j].id,
          "name": data[i].children[j].name,
          "level": data[i].children[j].level,
          "open": false,
          "children": arrLevel2
        });
        arrLevel2 = []
      }

      self.list.push({
        "id" : data[i].id,
        "name": data[i].name,
        "level": data[i].level,
        "open": false,
        "children": arrLevel1
      });
      arrLevel1 = []
    }

  } 

  handleChange(event){
    const index = event.target.dataset.index 
    console.log(this.list[index].children);
  }
  
  render(){

    function CollapseSection(props) {
      const [open, setOpen] = useState(false);
      const list = props.list
      
      return (
        
        <>

          <span
            className="Chrevon"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {
              open === false ? <Icon.ChevronDown /> : <Icon.ChevronUp />  
            }
          </span>
          <Collapse in={open}>
            <div id="example-collapse-text">
              {
                list.map((data, index) =>{
                  return(
                    <ListGroup key={index}>
                      <ListGroup.Item>
                        <Form.Check inline  data-level={data.level} data-index={index} type="checkbox" label={data.name} id={`select-child-${index}`}  name={data.id}  />
                        {data.children.length > 0 &&
                          <CollapseSection list={data.children}/>
                        }
                      </ListGroup.Item>
                    </ListGroup>
                  )
                  
                })
              }
            </div>
          </Collapse>
        </>
      );
    }
    
    return(
      <Form>
        {
          
          this.list.map((data,indexRoot)=>{

            return(
              <ListGroup key={indexRoot}>
                <ListGroup.Item>
                  <Form.Check inline data-level={data.level} data-index={indexRoot} type="checkbox" label={data.name} id={`select-father-${data.id}-1`}  name={data.id}   />
                  {data.children.length > 0 &&
                    <CollapseSection list={data.children}/>
                  }
                </ListGroup.Item>
              </ListGroup>
            )
          })
        }
        
      </Form>
      
    )
  }
}

export default ListItens