/* src/Index.jsx */
import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

import {useEffect} from "react"

function Index() {
    useEffect(() => {
        console.log('xxx')
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="flex justify-center bg-neutral-200 min-h-full" style={{minHeight: '1500px'}}>
                <div className="container mx-auto">
                    <img src="/assets/images/BANNER TRANSPARENCIA.jpg" alt="banner"/>
                    <Link to="/">
                        <div style={{
                            position: 'relative',
                            width: '48px',
                            height: '48px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            top: '-65px',
                            marginLeft: '20px'
                        }}>
                            <img
                                style={{
                                    position: 'absolute',
                                    width: '32px',
                                    backgroundColor: 'white',
                                    marginLeft: '8px',
                                    marginTop: '8px'
                                }}
                                src="/assets/images/home.png"
                            />
                        </div>
                    </Link>
                    <div className="font-sans font-bolder text-center align-middle "
                         style={{height: '105px', fontSize: '42px', margin: '0 auto'}}
                    >
                        <h1 style={{
                            marginTop: '40px',
                            fontStyle: 'bold',
                            fontFamily: 'Source Sans Pro',
                            letterSpacing: '-1.9px',
                            lineHeight: '32px'
                        }}>ESTADOS FINANCIEROS
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/Estados Financieros Auditados 2016[1].pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>ESTADOS FINANCIEROS 2016
                                </div>
                            </div>
                        </a>
                        <a href="assets/files/Estados Financieros Auditados 2017[1].pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>ESTADOS FINANCIEROS 2017
                                </div>
                            </div>
                        </a>

                        <a href="assets/files/Estados Financieros Auditados 2018[1].pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>ESTADOS FINANCIEROS 2018
                                </div>
                            </div>
                        </a>
                        <a href="assets/files/Estados Financieros Auditados 2019.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>ESTADOS FINANCIEROS 2019
                                </div>
                            </div>
                        </a>
                        <a href="assets/files/Estados Financieros Auditados 2020 (1).pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>ESTADOS FINANCIEROS 2020
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="font-sans font-bolder text-center align-middle "
                         style={{height: '105px', fontSize: '42px', margin: '0 auto'}}
                    >
                        <h1 style={{
                            marginTop: '40px',
                            fontStyle: 'bold',
                            fontFamily: 'Source Sans Pro',
                            letterSpacing: '-1.9px',
                            lineHeight: '32px'
                        }}>INVERSIONES
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/INVERSIONES 2016.pdf">
                        <div>
                            <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                            <div style={{
                                color: 'rgb(63,13,175)',
                                marginTop: '8px',
                                fontFamily: 'Bebas Neue',
                                fontSize: '20px',
                                letterSpacing: '1.0px',
                                position: 'relative',
                                top: '-40px',
                                left: '70px'
                            }}>INVERSIONES 2016
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/INVERSIONES 2017.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>INVERSIONES 2017
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/INVERSIONES 2018.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>INVERSIONES 2018
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/INVERSIONES 2019.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>INVERSIONES 2019
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/INVERSIONES 2020.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>INVERSIONES 2020
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/INVERSIONES 2021.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>INVERSIONES 2021
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="font-sans font-bolder text-center align-middle "
                         style={{height: '105px', fontSize: '42px', margin: '0 auto'}}
                    >
                        <h1 style={{
                            marginTop: '40px',
                            fontStyle: 'bold',
                            fontFamily: 'Source Sans Pro',
                            letterSpacing: '-1.9px',
                            lineHeight: '32px'
                        }}>REINVERSIONES
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/REINVERSIONES 2016.pdf">
                        <div>
                            <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                            <div style={{
                                color: 'rgb(63,13,175)',
                                marginTop: '8px',
                                fontFamily: 'Bebas Neue',
                                fontSize: '20px',
                                letterSpacing: '1.0px',
                                position: 'relative',
                                top: '-40px',
                                left: '70px'
                            }}>REINVERSIONES 2016
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/REINVERSIONES 2017.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>REINVERSIONES 2017
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/REINVERSIONES 2018.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>REINVERSIONES 2018
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/REINVERSIONES 2019.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>REINVERSIONES 2019
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/REINVERSIONES 2020.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>REINVERSIONES 2020
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/REINVERSIONES 2021.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>REINVERSIONES 2021
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="font-sans font-bolder text-center align-middle "
                         style={{height: '105px', fontSize: '42px', margin: '0 auto'}}
                    >
                        <h1 style={{
                            marginTop: '40px',
                            fontStyle: 'bold',
                            fontFamily: 'Source Sans Pro',
                            letterSpacing: '-1.9px',
                            lineHeight: '32px'
                        }}>OBRAS DE INFRAESTRUCTURA
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/OBRAS DE INFRAESTRUCTURA 2016.pdf">
                        <div>
                            <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                            <div style={{
                                color: 'rgb(63,13,175)',
                                marginTop: '8px',
                                fontFamily: 'Bebas Neue',
                                fontSize: '20px',
                                letterSpacing: '1.0px',
                                position: 'relative',
                                top: '-40px',
                                left: '70px'
                            }}>OBRAS DE INFRAESTRUCTURA 2016
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/OBRAS DE INFRAESTRUCTURA 2017.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>OBRAS DE INFRAESTRUCTURA 2017
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/OBRAS DE INFRAESTRUCTURA 2018.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>OBRAS DE INFRAESTRUCTURA 2018
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/OBRAS DE INFRAESTRUCTURA 2019.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>OBRAS DE INFRAESTRUCTURA 2019
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/OBRAS DE INFRAESTRUCTURA 2020.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>OBRAS DE INFRAESTRUCTURA 2020
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/OBRAS DE INFRAESTRUCTURA 2021.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>OBRAS DE INFRAESTRUCTURA 2021
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="font-sans font-bolder text-center align-middle "
                         style={{height: '105px', fontSize: '42px', margin: '0 auto'}}
                    >
                        <h1 style={{
                            marginTop: '40px',
                            fontStyle: 'bold',
                            fontFamily: 'Source Sans Pro',
                            letterSpacing: '-1.9px',
                            lineHeight: '32px'
                        }}>DONACIONES
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/DONACIONES 2016.pdf">
                        <div>
                            <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                            <div style={{
                                color: 'rgb(63,13,175)',
                                marginTop: '8px',
                                fontFamily: 'Bebas Neue',
                                fontSize: '20px',
                                letterSpacing: '1.0px',
                                position: 'relative',
                                top: '-40px',
                                left: '70px'
                            }}>DONACIONES 2016
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/DONACIONES 2017.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>DONACIONES 2017
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <a href="assets/files/DONACIONES 2018.pdf">
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '8px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    top: '-40px',
                                    left: '70px'
                                }}>DONACIONES 2018
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>


            <div className="mx-auto"
                 style={{backgroundColor: '#222', width: '100%', marginTop: '2px'}}>
                <div className="grid grid-cols-1  mx-auto"
                     style={{maxWidth: '1200px', marginTop: '4px', backgroundColor: '#222'}}>
                    <div className="font-sans font-bold text-center align-middle mx-auto"
                         style={{
                             backgroundColor: 'transparent',
                             margin: '14px',
                             fontSize: '14px',
                             fontFamily: 'Source Sans Pro',
                             color: 'white'
                         }}
                    >
                        <img src="assets/images/logo_uap.png"
                             style={{width: "70%", maxWidth: '300px', margin: "0 auto", marginTop: '20px'}} alt="logo"/>

                        <div style={{
                            marginBottom: '10px',
                            marginTop: '20px',
                        }}
                        >
                            <div>Central telefónica (+51)(01)500-9007</div>
                            <div>Av. San Felipe 1109 - Jesús María, Lima</div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Index;
