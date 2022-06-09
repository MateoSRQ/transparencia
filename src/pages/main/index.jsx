/* src/Index.jsx */
import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

import {useEffect} from "react"
function Index() {
useEffect(()=> {
        console.log('xxx')
        window.scrollTo(0,0)
}, [])
  return (
      <>
          <div className="flex justify-center bg-neutral-200 min-h-full" style={{minHeight: '1700px'}}>
              <div className="container mx-auto">
                  <img src="/assets/images/BANNER TRANSPARENCIA.jpg" alt="banner"/>
                  <div className="font-sans font-bolder text-center align-middle "
                       style={{height: '105px', borderTop: '4px solid rgb(139 92 246)', fontSize: '42px'}}
                  >
                      <h1 style={{
                          marginTop: '40px',
                          fontStyle: 'bold',
                          fontFamily: 'Source Sans Pro',
                          letterSpacing: '-1.9px'
                      }}>TRANSPARENCIA GENERAL
                      </h1>
                  </div>
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 mx-auto"
                       style={{maxWidth: '1200px', marginTop: '20px'}}>

                      <Link to="estatutos">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>ESTATUTOS Y REGLAMENTO GENERAL
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información sobre el Estatuto Universitario, el Estatuto Societario y el Reglamento de la UAP
                                  </div>
                              </div>
                          </div>
                      </Link>

                      <Link to="actas">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>ACTAS DE DIRECTORIO y RESOLUCIONES RECTORALES
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información sobre las Actas de Directorio y las Resoluciones Rectorales de la UAP
                                  </div>
                              </div>
                          </div>
                      </Link>





                      {/*<Link to="resoluciones">*/}
                      {/*    <div className="font-sans font-bold text-center align-middle "*/}
                      {/*         style={{*/}
                      {/*             backgroundColor: 'white',*/}
                      {/*             height: '100%',*/}
                      {/*             margin: '14px',*/}
                      {/*             borderTop: '4px solid rgb(139 92 246)',*/}
                      {/*             fontSize: '24px',*/}
                      {/*             marginBottom: '40px'*/}
                      {/*         }}*/}
                      {/*    >*/}
                      {/*        <div style={{*/}
                      {/*            color: 'rgb(63,13,175)',*/}
                      {/*            marginTop: '8px',*/}
                      {/*            fontFamily: 'Bebas Neue',*/}
                      {/*            letterSpacing: '1.0px'*/}
                      {/*        }}>RESOLUCIONES RECTORALES*/}
                      {/*        </div>*/}
                      {/*        <div style={{*/}
                      {/*            marginTop: '7px',*/}
                      {/*            fontFamily: 'Source Sans Pro',*/}
                      {/*            letterSpacing: '-.2px',*/}
                      {/*            fontSize: '15px'*/}
                      {/*        }}>*/}
                      {/*            <div className="text-center"*/}
                      {/*                style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>*/}
                      {/*              Información sobre las Resoluciones Rectorales de la UAP  */}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</Link>*/}

                      {/*<Link to="reglamentos">*/}
                      {/*    <div className="font-sans font-bold text-center align-middle "*/}
                      {/*         style={{*/}
                      {/*             backgroundColor: 'white',*/}
                      {/*             height: '100%',*/}
                      {/*             margin: '14px',*/}
                      {/*             borderTop: '4px solid rgb(139 92 246)',*/}
                      {/*             fontSize: '24px',*/}
                      {/*             marginBottom: '40px'*/}
                      {/*         }}*/}
                      {/*    >*/}
                      {/*        <div style={{*/}
                      {/*            color: 'rgb(63,13,175)',*/}
                      {/*            marginTop: '8px',*/}
                      {/*            fontFamily: 'Bebas Neue',*/}
                      {/*            letterSpacing: '1.0px'*/}
                      {/*        }}>REGLAMENTOS*/}
                      {/*        </div>*/}
                      {/*        <div style={{*/}
                      {/*            marginTop: '7px',*/}
                      {/*            fontFamily: 'Source Sans Pro',*/}
                      {/*            letterSpacing: '-.2px',*/}
                      {/*            fontSize: '15px'*/}
                      {/*        }}>*/}
                      {/*            <div className="text-center"*/}
                      {/*                style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>*/}
                      {/*              Información relativa sobre Reglamentos y documentación académica de la UAP  */}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</Link>*/}

                      <Link to="estados">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>INFORMACIÓN FINANCIERA
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información relativa a los Estados Financieros Auditados de la UAP  
                                  </div>
                              </div>
                          </div>
                      </Link>

                      <Link to="becas">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>BECAS Y CRÉDITOS EDUCATIVOS
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información sobre Becas Académicas de la UAP
                                  </div>
                              </div>
                          </div>
                      </Link>

                      {/*<Link to="inversiones">*/}
                      {/*    <div className="font-sans font-bold text-center align-middle "*/}
                      {/*         style={{*/}
                      {/*             backgroundColor: 'white',*/}
                      {/*             height: '100%',*/}
                      {/*             margin: '14px',*/}
                      {/*             borderTop: '4px solid rgb(139 92 246)',*/}
                      {/*             fontSize: '24px',*/}
                      {/*             marginBottom: '40px'*/}
                      {/*         }}*/}
                      {/*    >*/}
                      {/*        <div style={{*/}
                      {/*            color: 'rgb(63,13,175)',*/}
                      {/*            marginTop: '8px',*/}
                      {/*            fontFamily: 'Bebas Neue',*/}
                      {/*            letterSpacing: '1.0px'*/}
                      {/*        }}>INVERSIONES*/}
                      {/*        </div>*/}
                      {/*        <div style={{*/}
                      {/*            marginTop: '7px',*/}
                      {/*            fontFamily: 'Source Sans Pro',*/}
                      {/*            letterSpacing: '-.2px',*/}
                      {/*            fontSize: '15px'*/}
                      {/*        }}>*/}
                      {/*            <div className="text-center"*/}
                      {/*                style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>*/}
                      {/*              Información sobre Inversiones de la UAP  */}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</Link>*/}

                      <Link to="proyectos">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>INVESTIGACIÓN
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información relativa a Proyectos de Investigación realizados por la UAP  
                                  </div>
                              </div>
                          </div>
                      </Link>


                      <Link to="tarifas">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>TARIFAS
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información sobre las tarifas vigentes de la UAP  
                                  </div>
                              </div>
                          </div>
                      </Link>


                      <Link to="alumnos">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>ADMISIÓN
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información sobre los alumnos matriculados y egresados en cada periodo académico  
                                  </div>
                              </div>
                          </div>
                      </Link>

                      <Link to="academico">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>INFORMACIÓN ACADÉMICA
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                       style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                      Información sobre estudiantes por facultad y programa de estudios
                                  </div>
                              </div>
                          </div>
                      </Link>


                      <Link to="docentes">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>PLANA DOCENTE
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                       style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                      Información referente a la plana docente y docentes de investigación de la UAP
                                  </div>
                              </div>
                          </div>
                      </Link>


                      {/*<Link to="investigacion">*/}
                      {/*    <div className="font-sans font-bold text-center align-middle "*/}
                      {/*         style={{*/}
                      {/*             backgroundColor: 'white',*/}
                      {/*             height: '100%',*/}
                      {/*             margin: '14px',*/}
                      {/*             borderTop: '4px solid rgb(139 92 246)',*/}
                      {/*             fontSize: '24px',*/}
                      {/*             marginBottom: '40px'*/}
                      {/*         }}*/}
                      {/*    >*/}
                      {/*        <div style={{*/}
                      {/*            color: 'rgb(63,13,175)',*/}
                      {/*            marginTop: '8px',*/}
                      {/*            fontFamily: 'Bebas Neue',*/}
                      {/*            letterSpacing: '1.0px'*/}
                      {/*        }}>INVESTIGACIÓN*/}
                      {/*        </div>*/}
                      {/*        <div style={{*/}
                      {/*            marginTop: '7px',*/}
                      {/*            fontFamily: 'Source Sans Pro',*/}
                      {/*            letterSpacing: '-.2px',*/}
                      {/*            fontSize: '15px'*/}
                      {/*        }}>*/}
                      {/*            <div className="text-center"*/}
                      {/*                style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>*/}
                      {/*              Información sobre el campo de investigación de la UAP  */}
                      {/*            </div>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</Link>*/}

                      <Link to="reglamentos">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>REGLAMENTOS
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información relativa sobre Reglamentos de la UAP
                                  </div>
                              </div>
                          </div>
                      </Link>
                  </div>


                  <div className="font-sans font-bolder text-center align-middle "
                       style={{height: '105px', borderTop: '1px solid rgb(139 92 246)', fontSize: '42px', marginTop: '50px'}}
                  >
                      <div style={{
                          marginTop: '40px',
                          fontStyle: 'bold',
                          fontFamily: 'Source Sans Pro',
                          letterSpacing: '-1.9px'
                      }}>PROYECTO DE LICENCIAMIENTO
                      </div>
                  </div>
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 mx-auto"
                       style={{maxWidth: '1200px', marginTop: '20px', marginBottom: '70px'}}>

                      <Link to="modelo">

                              <div className="font-sans font-bold text-center align-middle "
                                   style={{
                                       backgroundColor: 'white',
                                       height: '100%',
                                       margin: '14px',
                                       borderTop: '4px solid rgb(139 92 246)',
                                       fontSize: '24px',
                                       marginBottom: '40px'
                                   }}
                              >
                                  <div style={{
                                      color: 'rgb(63,13,175)',
                                      marginTop: '8px',
                                      fontFamily: 'Bebas Neue',
                                      letterSpacing: '1.0px'
                                  }}>MODELO EDUCATIVO
                                  </div>
                                  <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información sobre el Modelo Educativo de la UAP  
                                  </div>
                              </div>

                          </div>
                      </Link>
                      <Link to="pei">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>PLAN ESTRATÉGICO INSTITUCIONAL
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información sobre el Plan Estratégico Institucional de la UAP  
                                  </div>
                              </div>
                          </div>
                      </Link>
                      <Link to="poi">
                          <div className="font-sans font-bold text-center align-middle "
                               style={{
                                   backgroundColor: 'white',
                                   height: '100%',
                                   margin: '14px',
                                   borderTop: '4px solid rgb(139 92 246)',
                                   fontSize: '24px',
                                   marginBottom: '40px'
                               }}
                          >
                              <div style={{
                                  color: 'rgb(63,13,175)',
                                  marginTop: '8px',
                                  fontFamily: 'Bebas Neue',
                                  letterSpacing: '1.0px'
                              }}>PLAN OPERATIVO INSTITUCIONAL
                              </div>
                              <div style={{
                                  marginTop: '7px',
                                  fontFamily: 'Source Sans Pro',
                                  letterSpacing: '-.2px',
                                  fontSize: '15px'
                              }}>
                                  <div className="text-center"
                                      style={{ lineHeight: '15px', width: '90%', marginLeft: '5%'}}>
                                    Información sobre el Plan Operativo Institucional de la UAP  
                                  </div>
                              </div>
                          </div>

                      </Link>

                  </div>
              </div>
              </div>



          <div className="mx-auto"
                style={{backgroundColor: '#222',  width: '100%', marginTop: '2px'}}>
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
                      <img src="assets/images/logo_uap.png" style={{width: "70%", maxWidth: '300px', margin: "0 auto", marginTop: '20px'}} alt="logo"/>

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
