import React, { useState } from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar, Select } from 'antd';

import { useGetExchangesQuery } from '../services/cryptoApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
    const [coinId, setcoinId] = useState('Qwsogvtv82FCd');

    const { data } = useGetExchangesQuery(coinId);
    const exchangesList = data?.data?.exchanges;

    const count = 50;
    const { data: cryptosList } = useGetCryptosQuery(count);
    const cryptos = cryptosList?.data?.coins

    if (!exchangesList) return <Loader />;
    const { Option } = Select;

    const handelChange = (value) => {
        setcoinId(value)
    }


    return (

        <>
            <Select defaultValue="Bitcoin" className="select-timePeriod2" placeholder="Select Currency" onChange={handelChange} style={{ width: '200px' }} >
                {cryptos?.map((data) => <Option value={data.uuid} key={data.uuid}>{data.name}</Option>,)}
            </Select>
            <Row style={{ padding: '12px 10px' }}>
                <Col span={6}><strong>Exchanges</strong></Col>
                <Col span={6}><strong>24hr Volume</strong></Col>
                <Col span={6}><strong>Markets</strong></Col>
                <Col span={6}><strong>Price</strong></Col>
            </Row>
            <Row>
                {exchangesList?.map((exchange) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={exchange.uuid}
                                showArrow={false}
                                header={(
                                    <Row key={exchange.uuid}>
                                        <Col span={6}>
                                            <Text className='rank'><strong>{exchange.rank}.</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.iconUrl} />
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange?.["24hVolume"])}</Col>
                                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                                        <Col span={6} style={{ wordBreak: 'break-word' }}>{millify(exchange.price)}</Col>
                                    </Row>
                                )}
                            >
                                <a style={{ display: 'flex', justifyContent: 'center' }} href={exchange.coinrankingUrl}>{exchange.coinrankingUrl}</a>
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Exchanges;
