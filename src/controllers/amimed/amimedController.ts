const { getPacientes,getTiposVisitas,getEstadosEquipos,getVisitasHospitales,
        getMesesVisitas,getTerapeutas ,getHospitales,getEvaluacionVisitas,getTiposEquipos,
        getPacientesXTerapeuta,getVisitasxTerapeuta,createVisita,updateVisita,getInsumos,
        deleteVisita,getVisitasXFiltros,getVisitasXFiltrosHistoricas,getVisitasxTerapeutaHisto,
        getFotoMensaje,getReferencias,getImagenesCarrousel,getPacientesVisitas,createPaciente,updatePaciente,deletePaciente, getPacienteKey,getMenuconfig} = require('../../db');
import axios from 'axios';
import { getCipherInfo } from 'crypto';
import {  } from '../../../models/init-models';
const { transform } = require('camaro')


exports.getPacientes = async (req: any, res: any, next: any) => {
    const pacientes = await getPacientes();
    res.status(200).send({ ok: true, pacientes, msg: 'get Pacientes From API' });
}

exports.createPaciente = async (req: any, res: any, next: any) => {
    const { 
    idPaciente,
    Modalidad,
    FechaNacimiento,
    Cedula,
    TelCel,
    FechaInicioPrograma,
    Equipo,
    TipoEquipo,
    MarcaEquipo,
    ModeloEquipo,
    SerieEquipo,
    MarcaMascarilla,
    TallaMascarilla,
    ModeloMascarilla,
    NoContrato,
    IdTerapeuta,
    MedicoTratante,
    Observaciones,
    NombrePaciente,
    Direccion,
    Hospital,
    FotoPaciente,
       
    } = req.body;
    const paciente = await createPaciente(
       { 
            idPaciente,
            Modalidad,
            FechaNacimiento,
            Cedula,
            TelCel,
            FechaInicioPrograma,
            Equipo,
            TipoEquipo,
            MarcaEquipo,
            ModeloEquipo,
            SerieEquipo,
            MarcaMascarilla,
            TallaMascarilla,
            ModeloMascarilla,
            NoContrato,
            IdTerapeuta,
            MedicoTratante,
            Observaciones,
            NombrePaciente,
            Direccion,
            Hospital,
            FotoPaciente,
          
    
    }

    );
    res.status(200).send({ ok: true, msg: 'actualizar Visitas From API', paciente });
}


exports.updatePaciente = async (req: any, res: any, next: any) => {
    const { 
       idPaciente,
    Modalidad,
    FechaNacimiento,
    Cedula,
    TelCel,
    FechaInicioPrograma,
    Equipo,
    TipoEquipo,
    MarcaEquipo,
    ModeloEquipo,
    SerieEquipo,
    MarcaMascarilla,
    TallaMascarilla,
    ModeloMascarilla,
    NoContrato,
    IdTerapeuta,
    MedicoTratante,
    Observaciones,
    NombrePaciente,
    Direccion,
    Hospital,
    FotoPaciente,

    } = req.body;
    console.log('----------------------- revisando los valores ------------------------------')
    console.log( )


    const paciente = await updatePaciente(
       { 
            idPaciente,
    Modalidad,
    FechaNacimiento,
    Cedula,
    TelCel,
    FechaInicioPrograma,
    Equipo,
    TipoEquipo,
    MarcaEquipo,
    ModeloEquipo,
    SerieEquipo,
    MarcaMascarilla,
    TallaMascarilla,
    ModeloMascarilla,
    NoContrato,
    IdTerapeuta,
    MedicoTratante,
    Observaciones,
    NombrePaciente,
    Direccion,
    Hospital,
    FotoPaciente,
    
    }

    );
    res.status(200).send({ ok: true, msg: 'actualizar Visitas From API', paciente });
}


exports.delPaciente = async (req: any, res: any, next: any) => {
    const idPaciente = req.query.IdPaciente;
    console.log('ID DE LA VISITA',idPaciente)
    const pacientedel = await deletePaciente(idPaciente);
    res.send({ msg: 'Visita eliminado',  pacientedel });
}






// ------------------------------------------------

exports.getImagenesCarrousel = async (req: any, res: any, next: any) => {
    const imagenes = await getImagenesCarrousel();
    res.status(200).send({ ok: true, imagenes, msg: 'get Pacientes From API' });
}

exports.getFotoMensaje = async (req: any, res: any, next: any) => {
    const id = req.query.id;
    const foto = await getFotoMensaje(id);
   // console.log('Registros Pacientes:',pacientes)
    res.status(200).send({ ok: true, msg: 'foto del mensaje', foto });
}

exports.getPacientesXTerapeuta = async (req: any, res: any, next: any) => {
    const terapeutaId = req.query.terapeutaId;
    const pacientes = await getPacientesXTerapeuta(terapeutaId);
   // console.log('Registros Pacientes:',pacientes)
    res.status(200).send({ ok: true, msg: 'get Proveedor From API', pacientes });
}

exports.getReferencias = async (req: any, res: any, next: any) => {
    const IdReferencia = req.query.IdReferencia;
    const Referencias = await getReferencias(IdReferencia);
   // console.log('Registros Pacientes:',pacientes)
    res.status(200).send({ ok: true, msg: 'get Proveedor From API', Referencias });
}

exports.getTiposVisitas = async (req: any, res: any, next: any) => {
    const tiposvisitas = await getTiposVisitas();
    res.status(200).send({ ok: true, tiposvisitas, msg: 'get tiposvisitas From API' });
}

exports.getEstadosEquipos = async (req: any, res: any, next: any) => {
    const EstadosEquipos = await getEstadosEquipos();
    res.status(200).send({ ok: true, EstadosEquipos, msg: 'get getEstadosEquipos From API' });
}

exports.getVisitasHospitales = async (req: any, res: any, next: any) => {
    const Id = req.query.Id ;
    const sn = req.query.sn ;
    const confirma = req.query.confirma;
    const VisitasHospital= await getVisitasHospitales(Id,sn,confirma);
    res.status(200).send({ ok: true, VisitasHospital, msg: 'get VisitasHospitales From API' });
}

exports.getVisitasxTerapeuta = async (req: any, res: any, next: any) => {
    const idTerapeuta = req.query.idTerapeuta;
    const patron      = req.query.patron;
    const VisitasHospitales = await getVisitasxTerapeuta(idTerapeuta,patron);
    res.status(200).send({ ok: true, VisitasHospitales, msg: 'get VisitasHospitales From API' });
}

exports.getVisitasxTerapeutaHisto = async (req: any, res: any, next: any) => {
    const idTerapeuta = req.query.idTerapeuta;
    const VisitasHospitales = await getVisitasxTerapeutaHisto(idTerapeuta);
    res.status(200).send({ ok: true, VisitasHospitales, msg: 'get Visitas historicas From API' });
}


exports.getMenuconfig = async (req: any, res: any, next: any) => {
    const gln = req.query.gln;
    const menuconfig = await getMenuconfig(gln);
    res.status(200).send({ ok: true, menuconfig, msg: 'get opciones menu From API' });
}



exports.getVisitasXFiltros = async (req: any, res: any, next: any) => {
    const IdHospital = req.query.IdHospital;
    const IdMesVisita = req.query.IdMesVisita;
    console.log('hosssssssssssssssssssspital', IdHospital)
    const VisitasHospitales = await getVisitasXFiltros(IdHospital,IdMesVisita);
    res.status(200).send({ ok: true, VisitasHospitales, msg: 'get VisitasHospitales From API' });
} 

exports.getVisitasXFiltrosHistoricas = async (req: any, res: any, next: any) => {
    const IdHospital = req.query.IdHospital;
    const IdMesVisita = req.query.IdMesVisita;
    const patron      = req.query.patron;
    const idTerapeuta = req.query.idTerapeuta;
     
    console.log('hosssssssssssssssssssspital', IdHospital)
    const VisitasHospitales = await getVisitasXFiltrosHistoricas(IdHospital,IdMesVisita,patron,idTerapeuta);
    res.status(200).send({ ok: true, VisitasHospitales, msg: 'get VisitasHospitales From API' });
} 


exports.getPacientesVisitas = async (req: any, res: any, next: any) => {
    
    const idTerapeuta = req.query.idTerapeuta;
    const IdMesVisita = req.query.IdMesVisita;
     
    console.log('hosssssssssssssssssssspital', idTerapeuta,IdMesVisita)
    const PacientesVisitas = await getPacientesVisitas(idTerapeuta,IdMesVisita);
    res.status(200).send({ ok: true, PacientesVisitas, msg: 'get PacientesVisitas From API' });
} 


exports.getPacienteKey = async (req: any, res: any, next: any) => {
    
    const IdTerapeuta = req.query.IdTerapeuta;
    const IdMesVisita = req.query.IdMesVisita;
    const idPaciente =  req.query.idPaciente;
    const IdTipoVisita = req.query.IdTipoVisita;
    const IdTipoEquipo = req.query.IdTipoEquipo
     
 
    const Paciente = await getPacienteKey(IdTerapeuta,IdMesVisita,idPaciente,IdTipoVisita,IdTipoEquipo);
       console.log('hosssssssssssssssssssspital', IdTerapeuta,IdMesVisita,Paciente)
    res.status(200).send({ ok: true, Paciente, msg: 'get PacientesVisitas From API' });
} 

exports.getMesesVisitas = async (req: any, res: any, next: any) => {
    const MesesVisitas = await getMesesVisitas();
    res.status(200).send({ ok: true, MesesVisitas, msg: 'get MesesVisitas From API' });
}


exports.getTerapeutas = async (req: any, res: any, next: any) => {
    const Terapeutas = await getTerapeutas();
    res.status(200).send({ ok: true, Terapeutas, msg: 'get Terapeutas From API' });
}


exports.getHospitales = async (req: any, res: any, next: any) => {
    const Hospitales = await getHospitales();
    res.status(200).send({ ok: true, Hospitales, msg: 'get Hospitales From API' });
}


exports.getEvaluacionVisitas = async (req: any, res: any, next: any) => {
    const EvaluacionVisitas = await getEvaluacionVisitas();
    res.status(200).send({ ok: true, EvaluacionVisitas, msg: 'get EvaluacionVisitas From API' });
}


exports.getTiposEquipos = async (req: any, res: any, next: any) => {
    const TiposEquipos = await getTiposEquipos();
    res.status(200).send({ ok: true, TiposEquipos, msg: 'get TiposEquipos From API' });
}


exports.createVisita = async (req: any, res: any, next: any) => {
    const { 
        Id,
        createdAt,
        updatedAt,
        deleted,
        IdHospital,
        idPaciente,
        IdTerapeuta,
        IdMesVisita,
        FechaVisita,
        IdTipoVisita,
        IdTipoEquipo,
        FrecuenciaCardiaca,
        PresionArterialSistolica,
        PresionArterialDiastolica,
        SaturacionOxigeno,
        HoraUsoPromDia,
        HorasTotalMensuales,
        DiasUsoSobreTotal,
        FugaLmin,
        IndiceApnea,
        PresionUtilizadaEpap,
        PresionUtilizadaIPAP,
        PresionUtilizadaCPAP,
        CambioEquipo,
        NumSerieEquipoyDN,
        IdEstadoEquipo,
        IdEvaluacionVisita,
        ObservacionesClinicas,
        ComentariosAdministrativos,
        SharePoint,
        EstadoPaciente,
        AdherenciaUsoTratamiento, 
        CambEquiInsuTrata, 
        CondTrataYParam, 
        SituaEspecYCoordi,
        MtoPreventivo
       
    } = req.body;
    const proveedor = await createVisita(
       { 
            Id,
            createdAt,
            updatedAt,
            deleted,
            IdHospital,
            idPaciente,
            IdTerapeuta,
            IdMesVisita,
            FechaVisita,
            IdTipoVisita,
            IdTipoEquipo,
            FrecuenciaCardiaca,
            PresionArterialSistolica,
            PresionArterialDiastolica,
            SaturacionOxigeno,
            HoraUsoPromDia,
            HorasTotalMensuales,
            DiasUsoSobreTotal,
            FugaLmin,
            IndiceApnea,
            PresionUtilizadaEpap,
            PresionUtilizadaIPAP,
            PresionUtilizadaCPAP,
            CambioEquipo,
            NumSerieEquipoyDN,
            IdEstadoEquipo,
            IdEvaluacionVisita,
            ObservacionesClinicas,
            ComentariosAdministrativos,
            SharePoint,
            EstadoPaciente,
            AdherenciaUsoTratamiento, 
            CambEquiInsuTrata, 
            CondTrataYParam, 
            SituaEspecYCoordi,
            MtoPreventivo
          
    
    }

    );
    res.status(200).send({ ok: true, msg: 'actualizar Visitas From API', proveedor });
}


exports.updateVisita = async (req: any, res: any, next: any) => {
    const { 
        Id,
        createdAt,
        updatedAt,
        deleted,
        IdHospital,
        idPaciente,
        IdTerapeuta,
        IdMesVisita,
        FechaVisita,
        IdTipoVisita,
        IdTipoEquipo,
        FrecuenciaCardiaca,
        PresionArterialSistolica,
        PresionArterialDiastolica,
        SaturacionOxigeno,
        HoraUsoPromDia,
        HorasTotalMensuales,
        DiasUsoSobreTotal,
        FugaLmin,
        IndiceApnea,
        PresionUtilizadaEpap,
        PresionUtilizadaIPAP,
        PresionUtilizadaCPAP,
        CambioEquipo,
        NumSerieEquipoyDN,
        IdEstadoEquipo,
        IdEvaluacionVisita,
        ObservacionesClinicas,
        ComentariosAdministrativos,
        SharePoint,
        EstadoPaciente,
        AdherenciaUsoTratamiento, 
        CambEquiInsuTrata, 
        CondTrataYParam, 
        SituaEspecYCoordi,
        MtoPreventivo

    } = req.body;
    console.log('----------------------- revisando los valores ------------------------------')
    console.log( EstadoPaciente,
        AdherenciaUsoTratamiento, 
        CambEquiInsuTrata, 
        CondTrataYParam, 
        SituaEspecYCoordi,SharePoint)


    const visitaHospital = await updateVisita(
       { 
            Id,
            createdAt,
            updatedAt,
            deleted,
            IdHospital,
            idPaciente,
            IdTerapeuta,
            IdMesVisita,
            FechaVisita,
            IdTipoVisita,
            IdTipoEquipo,
            FrecuenciaCardiaca,
            PresionArterialSistolica,
            PresionArterialDiastolica,
            SaturacionOxigeno,
            HoraUsoPromDia,
            HorasTotalMensuales,
            DiasUsoSobreTotal,
            FugaLmin,
            IndiceApnea,
            PresionUtilizadaEpap,
            PresionUtilizadaIPAP,
            PresionUtilizadaCPAP,
            CambioEquipo,
            NumSerieEquipoyDN,
            IdEstadoEquipo,
            IdEvaluacionVisita,
            ObservacionesClinicas,
            ComentariosAdministrativos,
            SharePoint,
            EstadoPaciente ,
            AdherenciaUsoTratamiento, 
            CambEquiInsuTrata, 
            CondTrataYParam, 
            SituaEspecYCoordi,
            MtoPreventivo
     
    
    }

    );
    res.status(200).send({ ok: true, msg: 'actualizar Visitas From API', visitaHospital });
}


exports.deleteVisita = async (req: any, res: any, next: any) => {
    const visitaId = req.query.Id;
    console.log('ID DE LA VISITA',visitaId)
    const visitadel = await deleteVisita(visitaId);
    res.send({ msg: 'Visita eliminado',  visitadel });
}


exports.getInsumos = async (req: any, res: any, next: any) => {

    

    const articulos = await getInsumos();
    res.status(200).send({ ok: true, msg: 'get ARTICULOS From API', articulos });


}






