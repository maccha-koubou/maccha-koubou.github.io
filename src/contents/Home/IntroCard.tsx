import Card from "../../components/Card";
import {colors} from "../../styles/theme";
import React from "react";

const IntroCard = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px 0px 40px 0px'
        }}>
            <Card
                w={'36%'}
                h={"fit-content"}
                bg={colors.white}
                borderWidth={2}
                borderColor={colors.primaryLight}
                radius={24}
                padding={[40, 56, 48, 56]}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '32px',
                }}>
                    <span style={{
                        color: colors.secondary,
                        fontWeight: 600,
                        fontSize: '20px',
                        textAlign: 'center'
                    }}>
                        Evelyn
                    </span>
                    <span style={{
                        color: colors.primary,
                        fontWeight: 500,
                        fontSize: '40px',
                        textAlign: 'center'
                    }}>
                        Designing for belonging, care, and change.
                    </span>
                    <span style={{
                        color: colors.secondary,
                        fontWeight: 300,
                        fontSize: '20px',
                        textAlign: 'center'
                    }}>
                        Products  /  Spaces
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default IntroCard;