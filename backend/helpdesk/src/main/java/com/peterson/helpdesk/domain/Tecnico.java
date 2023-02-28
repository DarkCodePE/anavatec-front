package com.peterson.helpdesk.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.peterson.helpdesk.domain.enums.Perfil;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.io.Serial;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Tecnico extends Pessoa{

    @Serial
    private static final long serialVersionUID = 1l;

    @JsonIgnore
    @OneToMany(mappedBy = "tecnico")
    private List<Chamado> chamados = new ArrayList<>();

    public Tecnico() {
        super();
        addPerfil(Perfil.CLIENTE);
    }

    public Tecnico(Integer id, String nome, String cpf, String email, String senha) {
        super(id, nome, cpf, email, senha);
        addPerfil(Perfil.CLIENTE);
    }

    public List<Chamado> getChamados() {
        return chamados;
    }

    public void setChamados(List<Chamado> chamados) {
        this.chamados = chamados;
    }
}
