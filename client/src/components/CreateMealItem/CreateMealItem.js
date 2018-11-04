import React from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default ({ createMeal }) => {
    return (
        <Form horizontal onSubmit={createDay}>
            <FormGroup controlId="formHorizontalcalories">
                <Col componentClass={ControlLabel} sm={2}>
                    Name of Meal
                </Col>
                <Col sm={10}>
                    <FormControl name="NameOfMeal" onChange={handleDayChange} type="text" placeholder="meal-meal" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Carbs
                </Col>
                <Col sm={10}>
                    <FormControl name="carbs" onChange={handleDayChange} type="integer" placeholder="carbs" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Date
                </Col>
                <Col sm={10}>
                    <FormControl name="date" onChange={handleDayChange} type="integer" placeholder="date" />
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Protein
                </Col>
                <Col sm={10}>
                    <FormControl name="protein" onChange={handleDayChange} type="integer" placeholder="calories" />
                </Col>
                <Button type="submit">Submit</Button>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Calories
                </Col>
                <Col sm={10}>
                    <FormControl name="calories" onChange={handleDayChange} type="integer" placeholder="calories" />
                </Col>
                <Button type="submit">Submit</Button>
            </FormGroup>
        </Form>
    )
}