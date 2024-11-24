function retirarMaterial() {
            // Limpa o histórico para uma nova execução
            document.getElementById("historico").innerHTML = "";

            // Gera um número inteiro aleatório entre 2 e 7 (peso do kit)
            let pesoKit = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
            document.getElementById("pesoInicial").innerText = `Peso total do kit: ${pesoKit} kg`;

            // Lista de instrumentos cirúrgicos
            const instrumentos = [
                "Bisturi",
                "Pinça",
                "Tesoura cirúrgica",
                "Retrator",
                "Afastador",
                "Agulha",
                "Porta-agulhas",
                "Alicate cirúrgico"
            ];

            while (pesoKit > 0) {
                // Gera um número decimal aleatório entre 0.1 e 2, com uma casa decimal
                let pesoMaterial = (Math.random() * (2 - 0.1) + 0.1).toFixed(1);
                pesoMaterial = parseFloat(pesoMaterial); // Converte para número para cálculos

                // Ajusta o pesoMaterial se ele for maior que o pesoKit restante
                if (pesoMaterial > pesoKit) {
                    pesoMaterial = pesoKit;
                }

                // Seleciona um instrumento aleatório
                const instrumento = instrumentos[Math.floor(Math.random() * instrumentos.length)];

                // Mostra o peso retirado em um alerta
                alert(`Instrumento: ${instrumento}, Peso retirado: ${pesoMaterial} kg`);

                // Adiciona a retirada no histórico
                const historico = document.getElementById("historico");
                const item = document.createElement("li");
                item.textContent = `Instrumento: ${instrumento}, Peso retirado: ${pesoMaterial} kg`;
                historico.appendChild(item);

                // Subtrai o peso do material do peso do kit
                pesoKit -= pesoMaterial;
            }

            // Finaliza o processo
            const final = document.createElement("p");
            final.textContent = "Todo o material foi retirado!";
            document.getElementById("historico").appendChild(final);

            alert("Todo o material foi retirado!");
        }