/* src/Index.jsx */
import React from "react";
import {Link} from "react-router-dom";
import "./index.css";


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
                        }}>ACTAS DE DIRECTORIO
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                         style={{maxWidth: '600px', marginTop: '-30px', position: 'relative', margin: '0 auto'}}>
                        <div>
                            <a href="assets/files/SESIÓN ORDINARIA DE DIRECTORIO N° 012– 2022.pdf">
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
                                }}>
                                    SESIÓN ORDINARIA DE DIRECTORIO N° 012 – 2022
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="assets/files/SO DE DIRECTORIO N° 013-2022.pdf">
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
                                }}>
                                    SESIÓN ORDINARIA DE DIRECTORIO N° 013– 2022.V
                                </div>
                            </a>
                        </div>

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
                        }}>RESOLUCIONES RECTORALES
                        </h1>
                    </div>
                    {/*<a href="assets/files/RES. N° 0684-2022 APROBAR LA MODIFICACION DEL REGLAMENTO GENERAL.pdf">*/}
                    {/*    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"*/}
                    {/*         style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>*/}
                    {/*        <div>*/}
                    {/*            <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>*/}
                    {/*            <div style={{*/}
                    {/*                color: 'rgb(63,13,175)',*/}
                    {/*                marginTop: '-0px',*/}
                    {/*                fontFamily: 'Bebas Neue',*/}
                    {/*                fontSize: '20px',*/}
                    {/*                letterSpacing: '1.0px',*/}
                    {/*                position: 'relative',*/}
                    {/*                lineHeight: '22px',*/}
                    {/*                top: '-40px',*/}
                    {/*                left: '70px'*/}
                    {/*            }}>RES N° 0684-2022<br/>APROBAR EL REGLAMENTO GENERAL*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</a>*/}

                    <a href="assets/files/RES. N° 0685-2022 APROBAR LA MODIFICACION DEL REGLAMENTO DE GRADOS Y TITULOS.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-0px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 0685-2022<br/>APROBAR LA MODIFICACIÓN DEL REGLAMENTO DE GRADOS Y TÍTULOS
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="assets/files/RES. N° 0686-2022 APROBAR LA MODIFICACION DEL ESTATUTO UNIVERSITARIO.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-0px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 0686-2022<br/>APROBAR LA MODIFICACIóN DEL ESTATUTO UNIVERSITARIO
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="assets/files/RES. N° 0687-2022 APROBAR EL REGLAMENTO DE PROTECCION DE DATOS PERSONALES.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-0px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 0687-2022<br/>APROBAR EL REGLAMENTO DE PROTECCIÓN DE DATOS PERSONALES
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="assets/files/RES. N° 0688-2022 APROBAR MODIFICACION DEL REGLAMENTO DEL PORTAL DE TRANSPARENCIA Y ACCESO A LA INFORMACION.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-12px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 0688-2022<br/>APROBAR MODIFICACIÓN DEL REGLAMENTO DEL PORTAL DE TRANSPARENCIA
                                    Y ACCESO A LA INFORMACIÓN
                                </div>
                            </div>
                        </div>
                    </a>


                    <a href="assets/files/RESOLUCION N° 0717-2022-R-UAP.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-12px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 717-2022<br/>APROBAR LA MODIFICACION DEL PLAN ESTRATÉGICO INSTITUCIONAL 2022-2024
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="assets/files/RESOLUCION N° 0718-2022-R-UAP.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-12px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 718-2022<br/>APROBAR LA MODIFICACION DEL PLAN OPERATIVO INSTITUCIONAL MULTIANUAL 2022-2024
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="assets/files/RESOLUCION N° 727-2022 APROBAR LA MODIFICACION DEL REGLENTO DE DEFENSORIA UNIVERSITARIA.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-12px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 727-2022<br/>APROBAR LA MODIFICACION DEL REGLAMENTO DE DEFENSORIA UNIVERSITARIA
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="assets/files/RESOLUCION N° 728-2022 APROBAR LA MODIFICACION DEL REGLAMENTO DE MPREVENCION E INTERVENCION EN CASOS DE ACOSO SEXUAL.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-12px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 728-2022<br/>APROBAR LA MODIFICACION DEL REGLAMENTO DE PREVENCION E INTERVENCION EN CASOS DE ACOSO SEXUAL
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="assets/files/RESOLUCION N° 729-2022 APROBAR LA MODIFICACION DEL CÓDIGO DEL BUEN GOBIERNO INSTITUCIONAL.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-12px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 0729-2022<br/>APROBAR LA MODIFICACION DEL CÓDIGO DEL BUEN GOBIERNO INSTITUCIONAL
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="assets/files/RESOLUCION N° 731-2022 APROBAR LA MODIFICACION DEL REGLAMENTO DE BECAS.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-12px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 0731-2022<br/>APROBAR LA MODIFICACION DEL REGLAMENTO DE BECAS
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="assets/files/RESOLUCION N° 755-2022 APROBAR EL REGLAMENTO DE PROTECCION DE DATOS PERSONALES.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-12px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 0755-2022<br/>APROBAR EL REGLAMENTO DE PROTECCION DE DATOS PERSONALES
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="assets/files/RESOLUCION N° 784-2022 APROBAR LA MODIFICACION DEL REGLAMENTO GENERAL.pdf">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 mx-auto"
                             style={{maxWidth: '600px', marginTop: '0px', position: 'relative', margin: '0 auto'}}>
                            <div>
                                <img src="assets/images/pdf.png" style={{transform: 'rotateZ(-0deg)', width: '42px'}}/>
                                <div style={{
                                    color: 'rgb(63,13,175)',
                                    marginTop: '-0px',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '20px',
                                    letterSpacing: '1.0px',
                                    position: 'relative',
                                    lineHeight: '22px',
                                    top: '-40px',
                                    left: '70px'
                                }}>RES N° 0784-2022<br/>APROBAR LA MODIFICACIÓN DEL REGLAMENTO GENERAL
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>


            <div className="mx-auto"
                 style={{backgroundColor: '#222', width: '100%', marginTop: '2px'}}>
                <div className="grid grid-cols-1  mx-auto"
                     style={{maxWidth: '1200px', marginTop: '4px', backgroundColor: '#222'}}>
                    <div className="font-sans font-bold text-center align-middle mx-auto"
                         style={{
                             backgroundColor: '#222',
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
