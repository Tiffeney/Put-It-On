import React from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default ({ createDay, handleDayChange }) => {
    return (
        <Form horizontal onSubmit={createDay}>
            <FormGroup controlId="formHorizontalcalories">
            <Col componentClass={ControlLabel} sm={2}>
                Calories
            </Col>
            <Col sm={10}>
                <FormControl name="calories" onChange={handleDayChange} type="text" placeholder="calories" />
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
                Weight
            </Col>
            <Col sm={10}>
                <FormControl name="weight" onChange={handleDayChange} type="text" placeholder="weight" />
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
                Date
            </Col>
            <Col sm={10}>
                <FormControl name="date" onChange={handleDayChange} type="date" placeholder="date" />
            </Col>
            <Button type="submit">Submit</Button>
            </FormGroup>
        </Form>
    )
}