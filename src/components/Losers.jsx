import React from 'react'
import millify from 'millify';
import { Collapse, Row, Col, Typography } from 'antd';
import { useGetCryptoGainerQuery } from '../services/cryptoGainerApi'
import Loader from './Loader';

const { Text, Title } = Typography;
const { Panel } = Collapse;

const Losers = () => {
    const { data , isFetching } = useGetCryptoGainerQuery();
    // console.log(data?.['Top Gainers'])

    const GainerList = data?.['Top Losers'];

    if (isFetching) return <Loader />;
    return (
        <>
            <Title level={2} className="heading">Top Losers Cryptos</Title>
            <Row style={{ padding: '12px 10px' }}>
                <Col span={6}><strong>Coins</strong></Col>
                <Col span={6}><strong>Price</strong></Col>
                <Col span={6}><strong>Drop 24hr</strong></Col>
                <Col span={6}><strong>Volume 24hr</strong></Col>
            </Row>
            <Row>
                {GainerList?.map((items) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={items.Symbol}
                                showArrow={false}
                                header={(
                                    <Row key={items.Symbol}>
                                        <Col span={6}>
                                            <Text className='symbol'><strong>{items.Symbol}</strong></Text>
                                            <Text><strong>{items.Coin}</strong></Text>
                                        </Col>
                                        <Col span={6} style={{ wordBreak: 'break-word' }}>{millify(items.Price)}</Col>
                                        <Col span={6}>{millify(items?.['Drop 24hr'])}%</Col>
                                        <Col span={6}>{millify(items?.["Volume 24hr"])}</Col>
                                    </Row>
                                )}
                            >
                                <strong style={{ display: 'flex', justifyContent: 'center' }}>Rank #{items.Rank}</strong>
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Losers
